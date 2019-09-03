import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import UserProfile from '../UserProfile/UserProfile';
import DogProfile from '../DogProfile/DogProfile';


export class App extends Component {
  render() {
    
    return (
      <>
      <Header />
      <main className="app">
        {/* <Home /> */}
        <UserProfile />
        {/* <DogProfile /> */}
      </main>
      </>
    );
  }
}

export default App;
