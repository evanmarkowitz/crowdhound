import React, { Component } from 'react';
import './SearchResults.css';
import DogCard from '../DogCard/DogCard';

export class SearchResults extends Component {
  render() {
    return (
      <section className="search-results">
        <DogCard />
      </section>
    )
  }
}

export default SearchResults;