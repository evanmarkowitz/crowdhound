import React from 'react';
import {SearchResults, GET_ALL_DOG_QUERY} from './SearchResults';
import {MockProvider} from '@apollo/react-testing'

import { shallow } from 'enzyme';



describe('SearchResults', () => {
  let wrapper;
  let mocks;
  beforeEach(() => {
     

      mocks = [
      {
        request: {
          query: GET_ALL_DOG_QUERY,

        },
        result: {
          data: {
            dog: { id: '1', name: 'Buck', photos: {sourceUrl: ''} },
          },
        },
      },
    ];
    wrapper = shallow(
      <MockProvider mocks={mocks} addTypename={false}>
        <SearchResults />
      </MockProvider>
    );

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
