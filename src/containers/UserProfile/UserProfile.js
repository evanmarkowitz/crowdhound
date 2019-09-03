import React, { Component } from 'react';
import './UserProfile.css';
import x from '../../images/bradly-cooper.jpg'
import dogFace1 from '../../images/dog-face-1.jpg';

class UserProfile extends Component {

 
  render() {
    const profileImageStyle = {
      backgroundImage: `url(${x})`,
      backgroundPosition: "center 1px",
      backgroundSize: "150px auto",
      backgroundRepeat: "no-repeat"
    }

    const dogImageStyle = {
      backgroundImage: `url(${dogFace1})`,
      backgroundPosition: "center 1px",
      backgroundSize: "150px auto",
      backgroundRepeat: "no-repeat"
    }

    return (
      <section className="user-profile">
        <section  className="profile-img" style={profileImageStyle} />
          <h5 className="user-profile-name">Bradly Copper</h5>
        <div className="user-profile-content-container">
            <div className="user-profile-content-info">
                <h5 className="user-about-me-title">ABOUT ME</h5>
                <p className="user-about-me-body">
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit,
                  sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <h5 className="user-address-title">MY ADDRESS</h5>
                <address className="user-address-body">
                1600 Amphitheatre Parkway Mountain View,<br/>
                CA 94043
                </address>
            </div>
            <div className="user-profile-content-dogs-title">
              <h5 className="user-about-me-title">DOGS</h5>
              <div className="user-profile-dogs-container">
                  <div className="user-profile-dog">
                    <section  className="dog-profile-img" style={dogImageStyle} />
                    <h5 className="dog-profile-name">Dogname</h5>
                  </div>
              </div>
            </div>
        </div>
      </section>
    )
  }
}

export default UserProfile