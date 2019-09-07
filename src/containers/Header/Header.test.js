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

  it('toggleBurger should run toggleFilterModal function', () => {
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

  it.skip('activeBurgerStyle should return the correct style', () => {
    console.log('xxxx',props.toggleFilterValue)
    const spy = jest.spyOn(wrapper.instance(), "activeBurgerStyle");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledWith(1)

  })

})
