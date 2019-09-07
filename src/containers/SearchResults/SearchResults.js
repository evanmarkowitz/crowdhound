import React from 'react';
import './SearchResults.css';
import DogCard from '../DogCard/DogCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useSelector } from 'react-redux'


export const GET_ALL_DOG_QUERY = gql`
  {
    dogs {
      id
      name
      photos {
        sourceUrl
      }
    }
  }
`;

export function SearchResults() {

  const distance = useSelector(state => state.distance)
  const activityLevel = useSelector(state => state.activityLevel)
  const dogSize = useSelector(state => state.dogSize)


  console.log(distance, activityLevel, dogSize)
  


  const { loading, error, data } = useQuery(
    GET_ALL_DOG_QUERY,
  )

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