import React, { Component } from 'react';
import './UserProfile.css';
import x from '../../images/bradly-cooper.jpg'

class UserProfile extends Component {

 
  render() {
    const profileImageStyle = {
      backgroundImage: `url(${x})`,
      backgroundPosition: "center 1px",
      backgroundSize: "150px auto",
      backgroundRepeat: "no-repeat"
  }

    return (
      <section className="user-profile">
          {/* <section className="profile-img" /> */}
        <div  className="profile-img"
              style={profileImageStyle}></div>
          <h5 className="user-profile-name">Bradly Copper</h5>
      </section>
    )
  }
}

export default UserProfile