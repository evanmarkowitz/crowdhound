import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useQuery } from '@apollo/react-hooks';
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
  `;



export const LogIn = () => {

  const auth = {
    firstName: "Bob",
    lastName: "Smith",
    email: "email@example.com",
    token: "token"
  }

  const { loading, error, data } = useQuery(
    AUTHENTICATE_USER,
    {variables: { apiKey: process.env.REACT_APP_USER_API_KEY, auth }}
  )

  console.log(error, data)

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
