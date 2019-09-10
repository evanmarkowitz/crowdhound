import React, { useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {mutation} from '../../api/apiCallsNew'
import { setUserLoggedIn, setCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import {Redirect } from 'react-router-dom';




firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
})

const LogIn = (props) => {



    const runLogIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      setUserToReduxStore(user)
    })
    console.log(props)
  }
  



    const setUserToReduxStore = user => {
    console.log('workinggggg', user)

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
    fetch('http://staging-crowdhound-be.herokuapp.com/graphql', opts)
      .then(res => res.json())
      .then(data => data)
      .then(result => {
        const user = result.data.authenticateUser.currentUser
        console.log(result.data.authenticateUser.token)
        props.handleCurrentUser({firstName: user.firstName, lastName: user.lastName, email: user.email, photoURL, token: user.token, isNew: result.data.authenticateUser.new})
        props.handleUserLoggedIn(!!user)
        // this.setState({newUser: result.data.authenticateUser.new}) 
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
