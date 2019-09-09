import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { UserProfile } from '../UserProfile/UserProfile';
import { DogProfile } from '../DogProfile/DogProfile';
import FilterModal from '../FilterModal/FilterModal';
import { SearchResults } from '../SearchResults/SearchResults';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import { setUserLoggedIn, setCurrentUser } from '../../actions';
import { AddDog } from '../AddDog/AddDog';
import AddUserDetail from '../AddUserDetail/AddUserDetail';
import {mutation} from '../../api/apiCallsNew'



export class App extends Component {


  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setUserToReduxStore(user)
    })
  }

  setUserToReduxStore = user => {

    let name = user === null ? "" : user.displayName
      let nameArray =  name.split(" ")
      let photoURL = user === null ? "" : user.photoURL
      let email = user === null ? "" : user.email

      this.props.handleCurrentUser({firstName: nameArray[0], lastName: nameArray[1], email, photoURL})
      this.props.handleUserLoggedIn(!!user)
      let auth = `{
        firstName: "${nameArray[0]}",
        lastName: "${nameArray[1]}",
        email: "${email}"
      }`
      let opts = {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({query: mutation(`"${process.env.REACT_APP_USER_API_KEY}"`, auth)})
      }
      fetch('http://staging-crowdhound-be.herokuapp.com/graphql', opts)
        .then(res => res.json())
        .then(console.log)

    }

  
  render() {
    return (
      
      <main className="app">
       {
       <>
      <Header />
      {this.props.toggleFilterValue && <FilterModal />}
        <Switch>
        <Route exact path="/" render={() => (<Home />)} />
        <Route exact path="/userprofile/:id" render={({match}) => {
          const  {id} = match.params
          const userId = {id}
          return <UserProfile {...userId}/>}} />
        <Route exact path="/dogprofile/:id" render={({match}) => {
          const  {id} = match.params
          const dogId = {id}
        return <DogProfile {...dogId} />
        }} />
        <Route exact path="/results" render={() => (<SearchResults />)} />
        <Route exact path="/addingdog" render={() => (<AddDog />)} />
        <Route exact path="/adduserdetail" render={() => (<AddUserDetail />)} />
        <Route render={() => (
                <>
                <div className="page-not-found-container">
                  <h6 className="not-found-status-code">404</h6>
                  <p className="page-not-exist">The page you’re looking for can’t be found.</p>
                </div>
                </>
            )}/>
        </Switch>
        </>}
      </main>
    );
  }
}

export const mapStateToProps = ({toggleFilterValue}) => ({
  toggleFilterValue
});

export const mapDispatchToProps = dispatch => ({
  handleUserLoggedIn: boolean => dispatch(setUserLoggedIn(boolean)),
  handleCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
