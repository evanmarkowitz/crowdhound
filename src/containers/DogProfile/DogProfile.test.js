// import React from 'react';
// import DogProfile from './DogProfile';
// import { shallow } from 'enzyme';



// describe('DogProfile', () => {
//   let wrapper;
//   beforeEach(() => {
//      wrapper = shallow(<DogProfile />);
//   })

//   it('should match the snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

// })


import React from 'react';
import {DogProfile, GET_DOG_QUERY} from './DogProfile';
import { MockedProvider } from '@apollo/react-testing'
import { shallow } from 'enzyme';




describe('DogProfile', () => {
  let wrapper;
  let mocks;
  beforeEach(() => {
      mocks = [
      {
        request: {
          query: GET_DOG_QUERY,

        },
        result: {
          data: {
            dog: { id: '1', name: 'Buck', breed: 'buck', longDesc: 'longDesc', activityLevel: 1, weight: 5, age: 5, photos: {sourceUrl: ''} },
            user: { id: '2', firstName: 'buckdog', lastName: 'buck', photos: {sourceUrl: ''}}
          },
        },
      },
    ];
    wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DogProfile />
      </MockedProvider>
    );

  })

  it('should map the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


})



