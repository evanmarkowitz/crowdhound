import React from 'react';
import {DogProfile, GET_DOG_QUERY} from './DogProfile';
import { MockedProvider } from '@apollo/react-testing'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'





describe('DogProfile', () => {
  let wrapper;
  let mocks;
  beforeEach(() => {
      mocks = [
      {
        request: {
          query: GET_DOG_QUERY,

        },
        result: {
          data: {
            dog: { id: '1', name: 'Buck', breed: 'buck', longDesc: 'longDesc', activityLevel: 1, weight: 5, age: 5, photos: {sourceUrl: ''} },
            user: { id: '2', firstName: 'buckdog', lastName: 'buck', photos: {sourceUrl: ''}}
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
    const component = renderer.create(
      <MockedProvider mocks={mocks}>
        <DogProfile />
      </MockedProvider>,
    );
    const tree = component.toJSON();
    expect(tree.children).toContain('Roof Roof hold on while we fetch this dog!');
  });

  it.skip('should match the mock data', async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks.data} addTypename={false}>
        <DogProfile name="Buck" />
      </MockedProvider>,
    );
  
    // await wait(0); // wait for response
  
    const p = component.root.findByType('p');
    expect(p.children).toContain('Buck is a poodle');
  })


 

})



