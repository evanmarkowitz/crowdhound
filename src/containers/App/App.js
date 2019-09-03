import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import DogProfile from '../DogProfile/DogProfile'

// import FilterModal from '../FilterModal/FilterModal';
// import UserProfile from '../UserProfile/UserProfile';


export class App extends Component {
  render() {
    
    return (
      <>
      <Header />
      {/* <UserProfile /> */}
      {/* <FilterModal /> */}
      <main className="app">
        <Home />
        <DogProfile />
      </main>
      </>
    );
  }
}

export default App;
