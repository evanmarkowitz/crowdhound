import { shallow } from 'enzyme';
import { AddUserDetail } from './AddUserDetail'
import React from 'react';


describe('AddUserDetail', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<AddUserDetail />)
  })
  
  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot()
  )


})