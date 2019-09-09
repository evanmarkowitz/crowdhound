import React from 'react';
import {SearchResults, GET_FILTERED_DOGS_QUERY} from './SearchResults';
import { MockedProvider } from '@apollo/react-testing'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'





describe('SearchResults', () => {
  let wrapper;
  let mocks;
  beforeEach(() => {
      mocks = [
      {
        request: {
          query: GET_FILTERED_DOGS_QUERY,

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

  it('should map the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should render loading state initially', () => {
    const component = renderer.create(
      <MockedProvider mocks={[]}>
        <SearchResults />
      </MockedProvider>,
    );
    const tree = component.toJSON();
    expect(tree.children).toContain('Loading....');
  });


})
