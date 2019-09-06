import { shallow } from 'enzyme';
import { FilterModal, mapDispatchToProps } from './FilterModal'
import React from 'react';
import { toggleFilterModal } from '../../actions';

describe('FilterModal', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      toggleFilterModal: jest.fn(),
      handleActivityLevel: jest.fn(),
      handleDogSize: jest.fn(),
      handleDistanceValue: jest.fn()
    }
    wrapper = shallow(<FilterModal {...props}/>)
  })
  
  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot()
  )

  it.skip('moveSlider should update state', () => {
    const event = {target: {value: 50}}
    wrapper.instance().moveSlider(event)
    expect(wrapper.state().distanceValue).toEqual(50)
  })

  it('clickFinder should run toggleFilterModal', () => {
    wrapper.instance().clickFinder();
    expect(props.toggleFilterModal).toHaveBeenCalled();
  })

  it.skip('clickFilter should update state', () => {
    const event = {target: {name: 'size', value: 'small'}}
    wrapper.instance().clickFilter(event);
    expect(wrapper.state().size).toEqual('small')
  })

  it('toggleFilterModal should be called by clicking on element with background className', () => {
    wrapper.find('.background').simulate('click');
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

  it.skip('activeLevelBtnStyle should return the correct style', () => {

    const event = {target: {name: 'activityLevel', value: 1}}
    wrapper.instance().clickFilter(event);
    expect(wrapper.state().activityLevel).toEqual(1)

    const spy = jest.spyOn(wrapper.instance(), "activeLevelBtnStyle");
    wrapper.instance().forceUpdate();
    spy(1)
    expect(spy).toHaveBeenCalledWith(1)

  })

})