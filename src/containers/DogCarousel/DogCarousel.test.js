import React from 'react';
import {DogCarousel, GET_ALL_DOG_QUERY } from './DogCarousel';
import { MockedProvider } from '@apollo/react-testing'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import wait from 'waait'


describe('DogCarousel', () => {
  let wrapper;
  let mocks;
  beforeEach(() => {
      mocks = [
      {
        request: {
          query: GET_ALL_DOG_QUERY ,
        },
        result: {
          data: {
            dogs: [{ id: 1, name: 'Buck', photos: {sourceUrl: 'sd'} }],
          },
        },
      },
    ];
    wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DogCarousel />
      </MockedProvider>
    );
  })
  it('should render loading state initially', async () => {
    await wait();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading state initially', () => {
    const component = renderer.create(
      <MockedProvider mocks={[]}>
        <DogCarousel />
      </MockedProvider>,
    );
  
    let tree = component.toJSON();
 
    expect(tree.children).toContain('Loading....');
  });
  
  it('renders without crashing', async () => {

    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DogCarousel/>
      </MockedProvider>,
    );
    await wait(0)

   
  });
})