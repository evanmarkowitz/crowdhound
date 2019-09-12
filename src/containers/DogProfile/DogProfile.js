import React from 'react'
import './DogProfile.css'
import dogProfilePic from '../../images/dalmation.jpg';
import userImage from '../../images/bradly-cooper.jpg';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export let GET_DOG_QUERY = gql`

  query getDog($id: ID!) {
  dog(id: $id) {
    id
    name
    breed
    longDesc
    activityLevel
    weight
    age
    photos {
        sourceUrl
      }
    user {
      id
      firstName
      photos {
        sourceUrl
      }
    }
  }
}
`
export let fixedAge = (age) => Math.floor(age)
export const DogProfile = (props) => {

  const id = parseInt(props.id)

  
  const { loading, error, data } = useQuery(
    GET_DOG_QUERY,
    { variables: { id: id } }
    
  );
  


  if(loading) return <p className='loading'>Roof Roof hold on while we fetch this dog!</p>;
  if(error) return <p>Error :</p>;

  const {name, longDesc, breed, photos, activityLevel, weight, age, user} = data.dog;

  const profileImageStyle = {
    backgroundImage: `url(${!photos[0] ? dogProfilePic : photos[0].sourceUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

  return(
    <main className='dog-profile-main'>
      <section className='dog-info-wrapper'>
        <div style={profileImageStyle} className='dog-image'></div>
        <div className='dog-info'>
          <h2>{name}</h2>
          <div className='about-container'>
            <h3>about:</h3>
            <p className='about'>{longDesc}</p>
          </div>
          <article className='dog-stats'>
            <div>
              <p className='stat-type'>Activity</p>
              <p className='stat-answer'>{['Low', 'Average', 'High'][activityLevel]}</p>
            </div>
            <div>
              <p className='stat-type'>Breed</p>
              <p className='stat-answer'>{breed}</p>
            </div>
            <div>
              <p className='stat-type'>Weight</p>
              <p className='stat-answer'>{weight}</p>
            </div>
            <div>
              <p className='stat-type'>Age</p>
              <p className='stat-answer'>{Math.floor(age)}</p>
            </div>
          </article>
        </div>
      </section>
      <section className='human-info'>
        <article className='user-wrapper'>
          <Link to={`/userprofile/${user.id}`} className = 'user-image' 
          style={{backgroundImage: `url(${!user.photos[0] ? userImage : user.photos[0].sourceUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
          </Link>
          <h3>{user.firstName}</h3>
          {props.currentId !== parseInt(user.id) && <button className='chat-button'>Chat</button>}
          <p id='zip-code'>Zip Code: <span>00000</span></p>
        </article>
      </section>
    </main>
  )
}

export const mapStateToProps = state => ({
  currentId: state.currentUser.id
})

export default connect(mapStateToProps, null)(DogProfile)