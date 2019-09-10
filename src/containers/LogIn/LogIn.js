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
  const setCookie = (c_name,value,exdays) =>
  {
     var exdate=new Date();
     exdate.setDate(exdate.getDate() + exdays);
     var c_value=escape(value) + ((exdays==null) ? "" : ("; expires="+exdate.toUTCString()));
     document.cookie=c_name + "=" + c_value;
  }


    const runLogIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      setUserToReduxStore(user)
    })
    console.log(props)
  }

    // const saveCookies = (items) => {
    //   let setCookie = cookie.serialize()
    // }
  



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
        const token = result.data.authenticateUser.token
        props.handleCurrentUser({firstName: user.firstName, lastName: user.lastName, email: user.email, photoURL, token: token, isNew: result.data.authenticateUser.new})
        props.handleUserLoggedIn(!!user)
        let userString = JSON.stringify(user)
        let tokenString = JSON.stringify(token)
        setCookie('user', userString, 21)
        setCookie('token', tokenString, 21)
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
