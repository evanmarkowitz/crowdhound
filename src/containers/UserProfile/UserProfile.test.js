import React from 'react';
import {UserProfile, GET_USER_QUERY} from './UserProfile';
import { MockedProvider } from '@apollo/react-testing'
import { shallow } from 'enzyme';
import wait from 'waait'
import renderer from 'react-test-renderer'








describe('UserProfile', () => {
  let wrapper;
  let mocks;
  beforeEach(() => {
      mocks = [
      {
        request: {
          query: GET_USER_QUERY,

        },
        result: {
          data: {
            user: { id: '1', firstName: 'Buck', lastName: 'buck', longDesc: 'longDesc', photos: {sourceUrl: ''} },
            dogs: { id: '2', name: 'buckdog', photos: {sourceUrl: ''}}
          },
        },
      },
    ];
    wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserProfile id={1}/>
      </MockedProvider>
    );

  })

  it('should map the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render loading state initially', async () => {
    await wait(2);
    expect(wrapper).toMatchSnapshot();
  });
})

