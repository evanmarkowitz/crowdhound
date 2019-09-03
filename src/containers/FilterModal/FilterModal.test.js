import { shallow } from 'enzyme';
import {FilterModal} from './FilterModal'
import React from 'react'

describe('FilterModal', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<FilterModal />)
  })
  
  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot()
  )
})