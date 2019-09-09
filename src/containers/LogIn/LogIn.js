import React, { useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {  useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';



firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
})

export const AUTHENTICATE_USER = gql`

    mutation authenticateUser($apiKey: String!, $auth: AuthorizationInputType!) {
      authenticate(apiKey: $apiKey, auth: $auth) {
        currentUser {
          id
          firstName
          lastName
          email
        }
        new
      }

    }

  `;



    //  {
    //   authenticateUser(
    //   apiKey: ${process.env.REACT_APP_USER_API_KEY},
      // auth: {
      //   firstName: "Bob",
      //   lastName: "Smith",
      //   email: "email@example.com",
      //   token: "token"
      // }
  //   ) {
  //     currentUser {
  //       id
  //       firstName
  //       lastName
  //       email
  //     }
  //     new
  //   }
  // }



export const LogIn = () => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUserToReduxStore(user)
      // console.log('user effect running...', user)
    })
  });

  let auth = {
    firstName: "",
    lastName: "",
    email: "",
  }
  

  const setUserToReduxStore = user => {
    let name = user === null ? "" : user.displayName
    let nameArray =  name.split(" ")

    let email = user === null ? "" : user.email
    auth.firstName = nameArray[0];
    auth.lastName = nameArray[1];
    auth.email = email;

  }


  const { loading, error, data } = useMutation(
    AUTHENTICATE_USER,
    {variables: { apiKey: process.env.REACT_APP_USER_API_KEY, auth }}
    )
    
    console.log('login page',loading, error, data)
 

  if(loading) return <p>Loading....</p>;
  if(error) return <p>Error :</p>;



   const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };


    
    return (
        <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
       />
    
    )
  
}



export default LogIn
