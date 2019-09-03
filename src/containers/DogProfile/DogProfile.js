import React from 'react'
import './DogProfile.css'
import profilePic from '../../images/dalmation.jpg';


const DogProfile = () => {

  return(
    <main className='dog-profile-main'>
      <div  className = 'dog-image' 
      style={{backgroundImage: `url(${profilePic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      </div>
      <div className='dog-info'>
          <article>
            <h2>Robert</h2>
            <h3>about:</h3>
            <p className='about'>Doggo ipsum noodle horse floofs porgo shoober doggo, such treat adorable doggo vvv.  Vvv floofs tungg I am bekom fat pupperino heck wow very biscit tungg, many pats long bois dat tungg tho blep smol. Heckin angery woofer you are doin me a concern extremely cuuuuuute</p>
          </article>
          <article className='dog-stats'>
            <div>
              <p>Activity</p>
              <p>High</p>
            </div>
            <div>
              <p>Breed</p>
              <p>Dalmation</p>
            </div>
            <div>
              <p>Weight</p>
              <p>5 lbs</p>
            </div>
            <div>
              <p>Age</p>
              <p>1</p>
            </div>
          </article>
      </div>
      <div className='human-info'>
      </div>

    </main>
  )
}

export default DogProfile