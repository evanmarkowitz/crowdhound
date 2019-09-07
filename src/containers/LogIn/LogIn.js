import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUserLoggedIn, setCurrentUser } from '../../actions';
import { connect } from 'react-redux';


firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
})

class LogIn extends Component {

  state = {
    isSignedIn: false,
  }

  componentDidMount () {

    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      let name = user === null ? "" : user.displayName
      let photoURL = user === null ? "" : user.photoURL
      this.props.handleCurrentUser({name , photoURL})
      this.props.handleUserLoggedIn(!!user)
    })

  }


   uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };

  render() {

    
    return (
        <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
       />
    
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  handleUserLoggedIn: boolean => dispatch(setUserLoggedIn(boolean)),
  handleCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(null, mapDispatchToProps)(LogIn)
