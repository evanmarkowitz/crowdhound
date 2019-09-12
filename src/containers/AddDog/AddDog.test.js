import { shallow } from 'enzyme';
import { AddDog } from './AddDog'
import React from 'react';


describe('AddDog', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<AddDog />)
  })
  
  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot()
  )

  it('handleChange should set the state', () => {
    const e = {target: {name: 'name', value: 'Name of dog'}};
    wrapper.instance().handleChange(e);
    expect(wrapper.state().name).toEqual('Name of dog')
  })

  it('handleFiles should set the state', () => {
    const files = {base64: 'files'}
    wrapper.instance().handleFiles(files);
    expect(wrapper.state().photo).toEqual('files')
  })


  it('submitDog should run on click', () => {
    wrapper.instance().submitDog = jest.fn();
    wrapper.instance().forceUpdate()
    wrapper.find('#add-dog-btn').simulate('click');
    expect(wrapper.instance().submitDog).toHaveBeenCalled();
  })

  it('submitDog should shoul call sendDog', () => {
    const spy = jest.spyOn(wrapper.instance(), "sendDog");
    wrapper.instance().forceUpdate()
    wrapper.find('#add-dog-btn').simulate('click');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalled()
  })

  it('submitDog should shoul call sendPhoto', async () =>  {
    const spy = jest.spyOn(wrapper.instance(), "sendPhoto");
    wrapper.instance().forceUpdate();
    spy(1, 'photo')
    expect(spy).toHaveBeenCalled()
  })

  it('submitDog should shoul call sendPhoto', async () =>  {
    const spy = jest.spyOn(wrapper.instance(), "sendPhoto");
    wrapper.instance().forceUpdate();
    spy(1, 'photo')
    expect(spy).toHaveBeenCalled()
  })

  


})