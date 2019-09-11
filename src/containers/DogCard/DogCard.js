import React, { Component } from 'react';
import './DogCard.css';
import dogFace1 from '../../images/dog-face-1.jpg';
import {Link} from 'react-router-dom';

export class DogCard extends Component {

  userImagePic = () => {
    const { photos } = this.props
     if(!photos[0]) {
        return dogFace1
      } else {
        return photos[0].sourceUrl
      }
    } 


  render() {
    const {name, id} = this.props

    const profileImageStyle = {
      backgroundImage: `url(${this.userImagePic()})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }
    return (
      <Link to={`/dogprofile/${id}`} className="dog-card">
        <div style={profileImageStyle} className='dog-card-img'></div>
        <div className="dog-card-info">
          <h5 className="dog-card-name">{name}</h5>
        </div>
      </Link>
    )
  }
}

export default DogCard
