import React from 'react'
import './DogProfile.css'
import profilePic from '../../images/dalmation.jpg';
import userImage from '../../images/bradly-cooper.jpg';


const DogProfile = () => {

  return(
    <main className='dog-profile-main'>
      <section  className = 'dog-image' 
      style={{backgroundImage: `url(${profilePic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      </section>
      <section className='dog-info'>
          <article>
            <h2>Robert</h2>
            <div className='about-container'>
              <h3>about:</h3>
              <p className='about'>Doggo ipsum noodle horse floofs porgo shoober doggo, such treat adorable doggo vvv.  Vvv floofs tungg I am bekom fat pupperino heck wow very biscit tungg, many pats long bois dat tungg tho blep smol. Heckin angery woofer you are doin me a concern extremely cuuuuuute</p>
            </div>
          </article>
          <article className='dog-stats'>
            <div>
              <p className='stat-type'>Activity</p>
              <p className='stat-answer'>High</p>
            </div>
            <div>
              <p className='stat-type'>Breed</p>
              <p className='stat-answer'>Dalmation</p>
            </div>
            <div>
              <p className='stat-type'>Weight</p>
              <p className='stat-answer'>5 lbs</p>
            </div>
            <div>
              <p className='stat-type'>Age</p>
              <p className='stat-answer'>1</p>
            </div>
          </article>
      </section>
      <section className='human-info'>
        <article className='user-wrapper'>
          <section  className = 'user-image' 
          style={{backgroundImage: `url(${userImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
          </section>
          <h3>Bradley Cooper</h3>
          <button className='chat-button'>Chat</button>
          <p id='zip-code'>Zip Code: <span>80211</span></p>
        </article>

      </section>

    </main>
  )
}

export default DogProfile