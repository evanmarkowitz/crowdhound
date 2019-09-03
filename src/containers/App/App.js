import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import DogProfile from '../DogProfile/DogProfile'

export class App extends Component {
  render() {
    
    return (
      <>
      <Header />
      <main className="app">
        <Home />
        <DogProfile />
      </main>
      </>
    );
  }
}

export default App;
