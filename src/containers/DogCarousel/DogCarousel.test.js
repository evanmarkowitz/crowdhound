import React from 'react';
import {DogCarousel, GET_ALL_DOG_QUERY } from './DogCarousel';
import { MockedProvider } from '@apollo/react-testing'
import { shallow, mount } from 'enzyme';
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
    const tree = component.toJSON();
    expect(tree.children).toContain('Loading....');
  });
  
  it('should render dog', async () => {

    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DogCarousel name="Buck" />
      </MockedProvider>,
    );
  
    await wait(0); // wait for response
  
    const p = component.root.findByType('p');
    expect(p.children).toContain('Buck');
  });
})