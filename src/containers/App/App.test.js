import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { setUserLoggedIn, setCurrentUser } from '../../actions';


describe('App', () => {
  let wrapper;
  let props;
  let document 
  beforeEach(() => {
    props = {
      currentUser: {isNew: false},
      handleCurrentUser: jest.fn(),
    }
    document = {
      cookie : 'test=isfun'
    };


     wrapper = shallow(<App {...props} getCookie={()=> jest.fn()} func={()=> jest.fn()}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot', () => {
    wrapper = shallow(<App {...props} toggleFilterValue={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount should invoke callCookies function', () => {
    wrapper.instance().callCookies = jest.fn();
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().callCookies).toHaveBeenCalled()
  })

  it('should dispatch with a setUserLoggedIn action when handleUserLoggedIn is called', () => {
    const mockDispatch = jest.fn();
    const mockSelected = true;
    const mockAction = setUserLoggedIn(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleUserLoggedIn(true);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should dispatch with a setCurrentUser action when handleCurrentUser is called', () => {
    const mockDispatch = jest.fn();
    const mockSelected = {name: 'user'};
    const mockAction = setCurrentUser(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleCurrentUser({name: 'user'});
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })


})
