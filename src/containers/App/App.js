import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import UserProfile from '../UserProfile/UserProfile';
import DogProfile from '../DogProfile/DogProfile';
import FilterModal from '../FilterModal/FilterModal';
import SearchResults from '../SearchResults/SearchResults';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';


export class App extends Component {
  render() {
    
    return (
      <main className="app">
      <Header />
      {this.props.toggleFilterModal && <FilterModal />}
        <Switch>
        <Route exact path="/" render={() => (<Home />)} />
        <Route exact path="/userprofile" render={() => (<UserProfile />)} />
        <Route exact path="/dogprofile" render={() => (<DogProfile />)} />
        <Route exact path="/results" render={() => (<SearchResults />)} />
        <Route render={() => (
                <>
                <div className="page-not-found-container">
                  <h6 className="not-found-status-code">404</h6>
                  <p className="page-not-exist">The page you’re looking for can’t be found.</p>
                </div>
                </>
            )}/>
        </Switch>
      </main>
    );
  }
}

export const mapStateToProps = ({toggleFilterModal}) => ({
  toggleFilterModal
});


export default connect(mapStateToProps, null)(App)
