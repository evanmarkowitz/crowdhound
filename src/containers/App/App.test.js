import React from 'react';
import {App} from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;
  let props;
  let document 
  beforeEach(() => {
    props = {
      currentUser: {isNew: false},
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
    wrapper = shallow(<App  {...props} toggleFilterValue={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('getCookie', () => {
    expect(wrapper.instance().getCookie(test)).toEqual('isfun')
  })

})
