import React from 'react';
import './SearchResults.css';
import DogCard from '../DogCard/DogCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';



export const GET_FILTERED_DOGS_QUERY = gql`

  query getFilteredDogs($activityLevelRange: [Int!], $weightRange: [Int!]) {
    dogs(activityLevelRange: $activityLevelRange, weightRange: $weightRange, ) {
        id
        name
        photos {
          sourceUrl
        }
    }
  }`;

export function SearchResults(props) {
  console.log(props.activityLevel)
  const activityLevelRange = [props.activityLevel, props.activityLevel]
  const dogSizeConvert = {
    small: [0, 15],
    medium: [16, 40],
    large: [41, 100]
  }

  const { loading, error, data } = useQuery(
    GET_FILTERED_DOGS_QUERY,
    {variables: { activityLevelRange, weightRange: dogSizeConvert[props.dogSize] }}
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


export const mapStateToProps = state => ({
  activityLevel:  state.activityLevel,
  dogSize: state.dogSize
})

export default connect(mapStateToProps)(SearchResults)

