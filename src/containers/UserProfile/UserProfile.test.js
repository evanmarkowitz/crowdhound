import React from 'react';
import UserProfile from './UserProfile';
import { shallow } from 'enzyme';



describe('UserProfile', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<UserProfile />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
