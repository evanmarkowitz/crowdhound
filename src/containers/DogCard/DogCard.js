import React, { Component } from 'react';
import './DogCard.css';
import dogFace1 from '../../images/dog-face-1.jpg';
import {Link} from 'react-router-dom';

export class DogCard extends Component {

    

  render() {
    const {name, photos, id} = this.props
    const userImagePic = !photos[0] ? dogFace1 : photos[0].sourceUrl

    const profileImageStyle = {
      backgroundImage: `url(${userImagePic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }
    return (
      <Link to={`/dogprofile/${id}`}  className="dog-card">
        <div style={profileImageStyle} className='dog-card-img'></div>
        <div className="dog-card-info">
          <h5 className="dog-card-name">{name}</h5>
        </div>
      </Link>
    )
  }
}

export default DogCard
