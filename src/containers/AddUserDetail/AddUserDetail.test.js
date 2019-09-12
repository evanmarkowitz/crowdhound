import { shallow } from 'enzyme';
import { AddUserDetail } from './AddUserDetail'
import React from 'react';


describe('AddUserDetail', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<AddUserDetail />)
  })
  
  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot()
  )

  it('handleChange should set the state', () => {
    const e = {target: {name: 'description', value: 'This is my description'}};
    wrapper.instance().handleChange(e);
    expect(wrapper.state().description).toEqual('This is my description')
  })

  it('handleFiles should call sendPhoto', () => {
    wrapper.instance().sendPhoto = jest.fn();
    wrapper.instance().handleFiles({files: {base64: 'base'}});
    expect(wrapper.instance().sendPhoto).toHaveBeenCalled();
  })

  it('submitDog should shoul call sendUser', () => {
    const spy = jest.spyOn(wrapper.instance(), "sendUser");
    wrapper.instance().forceUpdate()
    wrapper.find('#add-user-detail-btn').simulate('click');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalled()
  })

  it('submitDog should shoul call sendPhoto', async () =>  {
    const spy = jest.spyOn(wrapper.instance(), "sendPhoto");
    wrapper.instance().forceUpdate();
    spy(1, 'photo')
    expect(spy).toHaveBeenCalled()
  })


})