import React from 'react';
import {UserProfile, GET_USER_QUERY} from './UserProfile';
import { MockedProvider } from '@apollo/react-testing'
import { shallow } from 'enzyme';
import wait from 'waait'
import renderer from 'react-test-renderer'








describe('UserProfile', () => {
  let wrapper;

  beforeEach(() => {
  
    wrapper = shallow(
      <MockedProvider>
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

  it.skip('should run handleLogOut function', () => {
    wrapper.instance().hanldeLogOut = jest.fn();
    wrapper.instance().forceUpdate()
    wrapper.find('.log-out').props('onClick')();

    expect(wrapper.instance().hanldeLogOut).toHaveBeenCalled();

  })
})

