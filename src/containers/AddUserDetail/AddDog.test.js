import { shallow } from 'enzyme';
import { AddDog } from './AddDog'
import React from 'react';


describe('AddDog', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<AddDog />)
  })
  
  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot()
  )


})