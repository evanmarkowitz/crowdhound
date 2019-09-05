import React from 'react';
import {SearchResults, GET_ALL_DOG_QUERY} from './SearchResults';
import {MockedProvider} from '@apollo/react-testing'

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
            dog: { id: '1',  photos: {sourceUrl: ''} },
          },
        },
      },
    ];
    wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchResults />
      </MockedProvider>
    );

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
