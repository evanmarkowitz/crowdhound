import React from 'react';
import './UserProfile.css';
import x from '../../images/bradly-cooper.jpg'
import dogFace1 from '../../images/dog-face-1.jpg';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function UserProfile(props) {
  const id = parseInt(props.id)
  const { loading, error, data } = useQuery(gql`
    {
      user(id: ${id}) {
        id
        firstName
        lastName
        longDesc
        
        dogs {
          name
          photos
        }
      }
    }
  `);

  if(loading) return <p>Loading....</p>;
  if(error) return <p>Error :</p>;

    console.log(data.user.photos)
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

    const {firstName, lastName, longDesc } = data.user

    return (
      <section className="user-profile">
        <section  className="profile-img" style={profileImageStyle} />
          <h5 className="user-profile-name">{firstName +" "+ lastName}</h5>
        <div className="user-profile-content-container">
            <div className="user-profile-content-info">
                <h5 className="user-about-me-title">ABOUT ME</h5>
                <p className="user-about-me-body">
                  {longDesc}
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

export default UserProfile