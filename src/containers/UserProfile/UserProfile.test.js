import React from 'react';
import {UserProfile, mapDispatchToProps} from './UserProfile';
import { shallow } from 'enzyme';
import wait from 'waait';
import { setUserLoggedIn, setCurrentUser } from '../../actions';



describe('UserProfile', () => {
  let wrapper;

  beforeEach(() => {
  
    wrapper = shallow(
     
        <UserProfile id={1}/>
     
    );

  })

  it('should map the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render loading state initially', async () => {
    await wait(2);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should run handleLogOut function', () => {
    wrapper.instance().hanldeLogOut = jest.fn();
    wrapper.instance().forceUpdate()
    wrapper.find('.log-out').props('onClick')();
    expect(wrapper.instance().hanldeLogOut).toHaveBeenCalled();

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
    const mockSelected = {name: 'name'};
    const mockAction = setCurrentUser(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleCurrentUser({name: 'name'});
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
})

