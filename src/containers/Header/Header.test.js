import React from 'react';
import { Header, mapDispatchToProps} from './Header';
import { shallow } from 'enzyme';
import { toggleFilterModal } from '../../actions';




describe('Header', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      toggleFilterModal: jest.fn(),
      toggleFilterValue: true
    }
     wrapper = shallow(<Header {...props}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('toggleBurger should run toggleFilterModal function', () => {
     props = {
      toggleFilterModal: jest.fn(),
      toggleFilterValue: false
    }
     wrapper = shallow(<Header {...props}/>);
    wrapper.instance().toggleBurger();
    expect(props.toggleFilterModal).toHaveBeenCalled()
  })

  it('should dispatch toggleFilterModal action when toggleFilterModal is called', () => {
    const mockDispatch = jest.fn();
    const mockSelected = true;
    const mockAction = toggleFilterModal(mockSelected);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleFilterModal(mockSelected);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('Link with class logo should run toggleFilterModal', () => {
    wrapper.find('.logo').simulate('click');
    expect(props.toggleFilterModal).toHaveBeenCalled();
  })



})
