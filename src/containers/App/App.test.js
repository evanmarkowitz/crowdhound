import React from 'react';
import {App} from './App';
import { shallow } from 'enzyme';



describe.skip('App', () => {
  let wrapper;
  let firebase
  beforeEach(() => {
     wrapper = shallow(<App />);
     firebase = jest.fn()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot', () => {
    wrapper = shallow(<App toggleFilterValue={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

})
