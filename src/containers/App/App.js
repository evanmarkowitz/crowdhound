import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { UserProfile } from '../UserProfile/UserProfile';
import { DogProfile } from '../DogProfile/DogProfile';
import FilterModal from '../FilterModal/FilterModal';
import { SearchResults } from '../SearchResults/SearchResults';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { setUserLoggedIn, setCurrentUser } from '../../actions';
import { AddDog } from '../AddDog/AddDog';
import AddUserDetail from '../AddUserDetail/AddUserDetail';
import {mutation} from '../../api/apiCallsNew'



export class App extends Component {
  constructor() {
    super()
    this.state= {
      newUser: false
    }
  }

  componentDidMount() {
    let user = this.getCookie('user')
    console.log(user)
  }

  getCookie(c_name) {
      let i,x,y,ARRcookies=document.cookie.split(";");
      for (i=0; i<ARRcookies.length; i++)
      {
          x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          x=x.replace(/^\s+|\s+$/g,"");
          if (x==c_name)
          {
            return unescape(y);
          }
      }
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
        {this.props.currentUser.isNew && <Redirect to='/adduserdetail'/>}
      </main>
    );
  }
}

export const mapStateToProps = ({toggleFilterValue, currentUser}) => ({
  toggleFilterValue,
  currentUser
});

export const mapDispatchToProps = dispatch => ({
  handleUserLoggedIn: boolean => dispatch(setUserLoggedIn(boolean)),
  handleCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
