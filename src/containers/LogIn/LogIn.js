import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {mutation} from '../../api/apiCallsNew'
import { setUserLoggedIn, setCurrentUser } from '../../actions';
import { connect } from 'react-redux';





firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
})

const LogIn = (props) => {
  
    const runLogIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      setUserToReduxStore(user)
    })
  }

    const setUserToReduxStore = user => {
      
      let name = user === null ? "" : user.displayName
      let nameArray =  name.split(" ")
      let photoURL = user === null ? "" : user.photoURL
      let email = user === null ? "" : user.email

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
    fetch('https://staging-crowdhound-be.herokuapp.com/graphql', opts)
      .then(res => res.json())
      .then(data => data)
      .then(result => {
        const user = result.data.authenticateUser.currentUser
        const token = result.data.authenticateUser.token
        props.handleCurrentUser({firstName: user.firstName, lastName: user.lastName, email: user.email, photoURL, token: token, isNew: result.data.authenticateUser.new, id: parseInt(user.id)})
        props.handleUserLoggedIn(!!user)
      })
      .catch(console.log)

  }

   const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => runLogIn()
    }
  };
    
    return (
          <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
    )
  
}


export const mapDispatchToProps = dispatch => ({
  handleUserLoggedIn: boolean => dispatch(setUserLoggedIn(boolean)),
  handleCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(LogIn)
