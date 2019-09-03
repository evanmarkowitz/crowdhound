import React from 'react';
import DogProfile from './DogProfile';
import { shallow } from 'enzyme';



describe('UserProfile', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<DogProfile />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
