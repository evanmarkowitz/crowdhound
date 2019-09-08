import React from 'react';
import './SearchResults.css';
import DogCard from '../DogCard/DogCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useSelector } from 'react-redux'


export const GET_FILTERED_DOGS_QUERY = gql`

  query getFilteredDogs($activityLevelRange: [Int!], $weightRange: [Int!]) {
    dogs(activityLevelRange: $activityLevelRange, weightRange: $weightRange) {
        id
        name
        photos {
          sourceUrl
        }
    }
  }`;

export function SearchResults() {

  const distance = useSelector(state => state.distance)
  // const activityLevel = useSelector(state => state.activityLevel)
  const activityLevelRange = [1,3]
  // const dogSize = useSelector(state => state.dogSize)
  const weightRange = [1,10]


  console.log(distance, activityLevelRange, weightRange)

  


  const { loading, error, data } = useQuery(
    GET_FILTERED_DOGS_QUERY,
    {variables: { activityLevelRange, weightRange }}
  )

  console.log(error)

  if(loading) return <p>Loading....</p>;
  if(error) return <p>Error :</p>;
  
  const dog = data.dogs.map(dog => {
    return <DogCard {...dog} key={dog.id}/>
  })

  return (
      <section className="search-results">
        {dog}
      </section>
    )
  
}

// export default SearchResults;