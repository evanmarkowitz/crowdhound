import { toggleFilterModal, setDistanceValue, setActivityLevel, setDogSize, setUserLoggedIn, setCurrentUser } from '../actions';
import { activityLevelReducer } from './activityLevelReducer';
import { currentUserReducer } from './currentUserReducer';
import { distanceValueReducer } from './distanceValueReducer';
import { dogSizeReducer } from './dogSizeReducer';
import { toggleFilterModalReducer } from './toggleFilterModalReducer';
import { userLoggedInReducer } from './userLoggedInReducer';

describe('Reducers', () => {
  
  describe('activityLevelReducer', () => {
    it('should return state by default', () => {
      const result = activityLevelReducer(undefined, {});
      expect(result).toEqual(0)
    })

    it('should return activity level of the dog', () => {
      const mockActivityLevel = 3;
      const action = setActivityLevel(mockActivityLevel);
      const result = activityLevelReducer(undefined, action);
      expect(result).toEqual(3)
    })
  })

  describe('currentUserReducer', () => {
    it('should return state by default', () => {
      const result = currentUserReducer(undefined, [])
      expect(result).toEqual({name: "", photoURL: ""})
    })

    it('should return name and photoURL of current user', () => {
      const mockUser = {Name: 'Lis', photoURL: 'url'};
      const action = setCurrentUser(mockUser)
      const result = currentUserReducer(undefined, action);
      expect(result).toEqual({Name: 'Lis', photoURL: 'url'})
    })
  })

  describe('distanceValueReducer', () => {
    it('should return state by default', () => {
      const result = distanceValueReducer(undefined, [])
      expect(result).toEqual(10)
    })

    it('should return the distance', () => {
      const mockDistance = 50;
      const action = setDistanceValue(mockDistance);
      const result = distanceValueReducer(undefined, action);
      expect(result).toEqual(50);
    })
  })

  describe('dogSizeReducer', () => {
    it('should return state by default', () => {
      const result = dogSizeReducer(undefined, [])
      expect(result).toEqual('small')
    })

    it('should return the size of dog', () => {
      const mockSize = 'large';
      const action = setDogSize(mockSize);
      const result = dogSizeReducer(undefined, action);
      expect(result).toEqual('large');
    })
  })

  describe('toggleFilterModalReducer', () => {
    it('should return state by default', () => {
      const result = toggleFilterModalReducer(undefined, [])
      expect(result).toEqual(false)
    })

    it('should toggle toggleFilterModalReducer', () => {
      const mockState = true;
      const action = toggleFilterModal(mockState);
      const result = toggleFilterModalReducer(undefined, action);
      expect(result).toEqual(true);
    })
  })
  
  describe('userLoggedInReducer', () => {
    it('should return state by default', () => {
      const result = userLoggedInReducer(undefined, [])
      expect(result).toEqual(false)
    })

    it('should toggle userLoggedIn', () => {
      const mockState = true;
      const action = setUserLoggedIn(mockState);
      const result = userLoggedInReducer(undefined, action);
      expect(result).toEqual(true);
    })
  })


})