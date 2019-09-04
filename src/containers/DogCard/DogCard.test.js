import React from './node_modules/react';
import {DogCard} from './DogCard';
import { shallow } from './node_modules/enzyme';



describe('DogCard', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<DogCard />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
