import React from 'react';
import {App} from './App';
import { shallow } from 'enzyme';
import { jsxEmptyExpression } from '@babel/types';



describe('App', () => {
  let wrapper;
  // let firebase;
  let props;
  beforeEach(() => {
    props = {
      currentUser: {isNew: false},
    }


     wrapper = shallow(<App {...props} getCookie={()=> jest.fn()} func={()=> jest.fn()}/>);
    //  firebase = jest.fn()
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it.skip('should match the snapshot', () => {
    wrapper = shallow(<App toggleFilterValue={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('getCookie', () => {
    // wrapper.instance().getCookie = jest.fn();
    // wrapper.instance().getCookie();
    // expect(wrapper.instance().getCookie).toEqual('somehthing')
  })

})
