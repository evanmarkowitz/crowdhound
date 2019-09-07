// import React from 'react';
// import  Home  from './Home';
// import { shallow } from 'enzyme';




describe.skip('Home', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<Home />);
    
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
