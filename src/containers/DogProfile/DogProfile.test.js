import React from 'react';
import {DogProfile, GET_DOG_QUERY} from './DogProfile';
import { MockedProvider } from '@apollo/react-testing'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import wait from 'waait'



describe('DogProfile', () => {
  let wrapper;
  let mocks;
  beforeEach(() => {
      mocks = [
      {
        request: {
          query: GET_DOG_QUERY,
          variables: { id: 1 } 
        },
        result: {
          data: {
            dog: { id: 1, name: 'Buck', breed: 'buck', longDesc: 'longDesc', activityLevel: 1, weight: 5, age: 5, photos: {sourceUrl: 'sd'} },
            user: { id: '2', firstName: 'buckdog', photos: {sourceUrl: 'sd'}}
          },
        },
      },
    ];
    wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DogProfile />
      </MockedProvider>
    );

  })

  it('should map the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render loading state initially', async () => {
    await wait();
    expect(wrapper).toMatchSnapshot();
    
  });


  it('should render loading state initially', () => {
    const component = renderer.create(
      <MockedProvider mocks={[]}>
        <DogProfile />
      </MockedProvider>,
    );
    const tree = component.toJSON();
    expect(tree.children).toContain('Roof Roof hold on while we fetch this dog!');
  });
  
})



