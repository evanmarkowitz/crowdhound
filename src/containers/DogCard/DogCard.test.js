import React from 'react';
import {DogCard} from './DogCard';
import { shallow } from 'enzyme';



describe('DogCard', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<DogCard photos={''}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
