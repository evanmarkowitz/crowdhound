import React from 'react';
import {UserProfile} from './UserProfile';
import { shallow } from 'enzyme';
import wait from 'waait'








describe('UserProfile', () => {
  let wrapper;

  beforeEach(() => {
  
    wrapper = shallow(
     
        <UserProfile id={1}/>
     
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

