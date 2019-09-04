import React, { Component } from 'react';
import './DogCard.css';
import profilePic from '../../images/dalmation.jpg';

export class DogCard extends Component {

    

  render() {
    const profileImageStyle = {
      backgroundImage: `url(${profilePic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }
    return (
      <section className="dog-card">
        <div style={profileImageStyle} className='dog-card-img'></div>
        <div className="dog-card-info">
          <h5 className="dog-card-name">Dogname</h5>
          <p>5 miles</p>
          <button>Details!</button>
        </div>
      </section>
    )
  }
}

export default DogCard
