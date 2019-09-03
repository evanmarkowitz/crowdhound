import React from 'react';
import {SearchResults} from './SearchResults';
import { shallow } from 'enzyme';



describe('SearchResults', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<SearchResults />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
