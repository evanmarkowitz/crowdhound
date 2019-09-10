import { shallow } from 'enzyme';
import { FilterModal, mapDispatchToProps } from './FilterModal'
import React from 'react';
import { toggleFilterModal, setDistanceValue, setActivityLevel, setDogSize } from '../../actions';

describe('FilterModal', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      toggleFilterModal: jest.fn(),
      handleActivityLevel: jest.fn(),
      handleDogSize: jest.fn(),
      handleDistanceValue: jest.fn(),
      currentUser: { photoURL: ''},
      activityLevel: 0,
      dogSize: 'small',
      userLoggedIn: true
    }
    wrapper = shallow(<FilterModal {...props}/>)
  })
  
  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot()
  )

  it('should match the snapshot', () => {
    props = {userLoggedIn: false, currentUser: { photoURL: ''},}
      wrapper = shallow(<FilterModal {...props}/>)
      expect(wrapper).toMatchSnapshot()
    })

  it('moveSlider should call handleDistanceValue', () => {
    const event = {target: {value: 50}}
    wrapper.instance().moveSlider(event)
    expect(wrapper.state().distance).toEqual(50)
  })

  it('clickFinder should run toggleFilterModal', () => {
    wrapper.instance().clickFinder();
    expect(props.toggleFilterModal).toHaveBeenCalled();
  })

  it('clickFilter should update activityLevel state if target name is activityLevel .', () => {
    const event = {target: {name: 'activityLevel', value: 2}}
    wrapper.instance().clickFilter(event);
    expect(wrapper.state().activityLevel).toEqual(2);
  })

  it('clickFilter should update state of dogSize if target name is NOT activityLevel .', () => {
    const event = {target: {name: 'size', value: 'medium'}}
    wrapper.instance().clickFilter(event);
    expect(wrapper.state().dogSize).toEqual('medium');
  })

  it('toggleFilterModal should be called by clicking on element with background className', () => {
    wrapper.find('.background').simulate('click');
    expect(props.toggleFilterModal).toHaveBeenCalled();
  })

  it('dogSizeBtnStyle should return the correct style', () => {
    const spy = jest.spyOn(wrapper.instance(), "dogSizeBtnStyle");
    wrapper.instance().forceUpdate();
    spy('small')
    expect(spy).toHaveBeenCalledWith('small')
  })


  it('activeLevelBtnStyle should return the correct style', () => {
    const spy = jest.spyOn(wrapper.instance(), "activeLevelBtnStyle");
    wrapper.instance().forceUpdate();
    spy(1)
    expect(spy).toHaveBeenCalledWith(1)
  })

  it('toggleFilterModal should be called by clicking on element with dog-card-img className', () => {
    wrapper.find('.go-to-user-profile').simulate('click');
    expect(props.toggleFilterModal).toHaveBeenCalled();
  })

  it('should dispatch with a toggleFilterModal action when toggleFilterModal is called', () => {
    const mockDispatch = jest.fn();
    const mockSelected = true;
    const mockAction = toggleFilterModal(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleFilterModal(mockSelected);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should dispatch with a setDistanceValue action when handleDistanceValue is called', () => {
    const mockDispatch = jest.fn();
    const mockSelected = 1;
    const mockAction = setDistanceValue(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleDistanceValue(mockSelected);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should dispatch with a setActivityLevel action when handleActivityLevel is called', () => {
    const mockDispatch = jest.fn();
    const mockSelected = 10;
    const mockAction = setActivityLevel(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleActivityLevel(mockSelected);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should dispatch with a setDogSize action when handleDogSize is called', () => {
    const mockDispatch = jest.fn();
    const mockSelected = 10;
    const mockAction = setDogSize(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleDogSize(mockSelected);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

})