import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css';
import dogFace1 from '../../images/dog-face-1.jpg';
import userImage from '../../images/bradly-cooper.jpg';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import firebase from 'firebase';
import { setUserLoggedIn, setCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import { deleteDogQuery } from '../../api/apiCallsNew'


export const GET_USER_QUERY = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      longDesc
      photos {
        sourceUrl
      }
      dogs {
        id
        name
        photos {
          sourceUrl
        }
      }
    }
  
}`

export function UserProfile(props) {

  const setCookie = (c_name,value,exdays) =>
  {
     var exdate=new Date();
     exdate.setDate(exdate.getDate() + exdays);
     var c_value=escape(value) + ((exdays==null) ? "" : ("; expires="+exdate.toUTCString()));
     document.cookie=c_name + "=" + c_value;
  }

  const dispatch = useDispatch()
  const userLoggedIn = useSelector(state => state.userLoggedIn)

   
  const id = parseInt(props.id)

  const { loading, error, data } = useQuery(
    GET_USER_QUERY,
    { variables: { id } }
  );

  if(loading) return <p>Loading....</p>;
  if(error) return <p>Error :</p>;
  console.log(data)

  const {firstName, longDesc, photos, dogs, address} = data.user

  const userImagePic = !photos[0] ? userImage : photos[0].sourceUrl

    const profileImageStyle = {
      backgroundImage: `url(${userImagePic})`,
      backgroundPosition: "center 1px",
      backgroundSize: "150px auto",
      backgroundRepeat: "no-repeat"
    }


    const hanldeLogOut = () => {
      firebase.auth().signOut().then(function() {
         dispatch(setUserLoggedIn(false))
         dispatch(setCurrentUser({name: "", photoURL: ""}))
         setCookie('user','', 21)
      }).catch(function(error) {
        // console.log(error)
      });
    }

    const deleteDog = async (id) => {
      let opts = {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({query: deleteDogQuery(
          id
        )})
      }
      try{
        let response = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${props.token}`, opts)
        let parsedResponse = await response.json()
        console.log(parsedResponse)
    
      } catch(error) {
        console.log(error)
      }

    }

  

    const dog = dogs.map(dog => {
      const dogImage = !dog.photos[0] ? dogFace1 : dog.photos[0].sourceUrl
      const dogImageStyle = {
        backgroundImage: `url(${dogImage})`,
        backgroundPosition: "center 1px",
        backgroundSize: "150px auto",
        backgroundRepeat: "no-repeat"
      }

      return (
        <div className="user-profile-dog" key={dog.id}>
          <Link to={`/dogprofile/${dog.id}`} className="dog-profile-img" style={dogImageStyle}></Link>
          <h5 className="dog-profile-name">{dog.name}</h5>
          {id === props.currentId && <button onClick={() => deleteDog(dog.id)}>delete dog</button>}
        </div>
      )
    })
    console.log(id)
    console.log(props.currentId)
  
    return (
      <section className="user-profile">
        <section  className="profile-img" style={profileImageStyle}></section>
          <h5 className="user-profile-name">{id === props.currentId && 'Welcome, '}{firstName}</h5>
        <div className="user-profile-content-container">
            <div className="user-profile-content-info">
                <h5 className="user-about-me-title">ABOUT ME</h5>
                <p className="user-about-me-body">
                  {longDesc}
                </p>
                {
                    (userLoggedIn && id === props.currentId) &&
                    <button className="log-out" onClick={hanldeLogOut}>Log out</button>
                }
                
            </div>
            <div className="user-profile-content-dogs-title">
              <h5 className="user-about-me-title">DOGS</h5>
              <div className="user-profile-dogs-container">
                  {dog}
              </div>
            </div>
        </div>
      </section>
    )
}

export const mapStateToProps = state => ({
  token: state.currentUser.token,
  currentId: state.currentUser.id
})


export default connect(mapStateToProps)(UserProfile)
