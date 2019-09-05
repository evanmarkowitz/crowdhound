import React from 'react'
import './DogProfile.css'
import dogProfilePic from '../../images/dalmation.jpg';
import userImage from '../../images/bradly-cooper.jpg';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';


const DogProfile = (props) => {

  const dogId = parseInt(props.id)
  
  const { loading, error, data } = useQuery(gql`
    {
      dog(id: ${dogId}) {
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
          lastName
          photos {
            sourceUrl
          }
        }
      }
    }
  `);

  if(loading) return <p>Loading....</p>;
  if(error) return <p>Error :</p>;

  const {name, longDesc, breed, photos, activityLevel, weight, age, user} = data.dog;
  const activities = ['Low', 'Average', 'High'];
  const fixedAge = Math.floor(age)
  const dogImage = !photos[0] ? dogProfilePic : photos[0].sourceUrl;
  const userImagePic = !user.photos[0] ? userImage : user.photos[0].sourceUrl


  const profileImageStyle = {
    backgroundImage: `url(${dogImage})`,
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
              <p className='stat-answer'>{activities[activityLevel]}</p>
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
              <p className='stat-answer'>{fixedAge}</p>
            </div>
          </article>
        </div>
      </section>
      <section className='human-info'>
        <article className='user-wrapper'>
          <Link to={`/userprofile/${user.id}`} className = 'user-image' 
          style={{backgroundImage: `url(${userImagePic})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
          </Link>
          <h3>{user.firstName+ " "+ user.lastName}</h3>
          <button className='chat-button'>Chat</button>
          <p id='zip-code'>Zip Code: <span>00000</span></p>
        </article>
      </section>
    </main>
  )
}

export default DogProfile