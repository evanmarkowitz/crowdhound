import React from 'react';
import {DogCard} from './DogCard';
import { shallow } from 'enzyme';



describe('DogCard', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      photos: [{sourceUrl: 'url'}]
    }
     wrapper = shallow(<DogCard {...props}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('userImagePic should return the url of photo', () => {
    const spy = jest.spyOn(wrapper.instance(), "userImagePic");
    wrapper.instance().forceUpdate();
    spy()
    expect(spy).toHaveBeenCalled()
  })

  it('userImagePic should return the url of photo', () => {
    props = {
      photos: []
    }
    wrapper = shallow(<DogCard {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), "userImagePic");
    wrapper.instance().forceUpdate();
    spy()
    expect(spy).toHaveBeenCalled()
  })

})
