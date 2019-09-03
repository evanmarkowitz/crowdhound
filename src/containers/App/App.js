import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Route, Switch, NavLink } from 'react-router-dom';


export class App extends Component {
  render() {
    
    return (
      <>
      <Header />
      <main className="app">
        <Home />
      </main>
      </>
    );
  }
}

export default App;
