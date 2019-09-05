import React from 'react';
import './SearchResults.css';
import DogCard from '../DogCard/DogCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


function SearchResults() {

  const { loading, error, data } = useQuery(gql`
    {
      dogs {
        id
        name
        photos {
          sourceUrl
        }
      }
    }
  `);

  if(loading) return <p>Loading....</p>;
  if(error) return <p>Error :</p>;
  
  const dog = data.dogs.map(dog => {
    return <DogCard {...dog}/>
  })

  return (
      <section className="search-results">
        {dog}
      </section>
    )
  
}

export default SearchResults;