import React, { Component } from 'react';
import './Home.css';
import dogsHomePage from '../../images/dogs-homepage.jpg';
import { DogCarousel } from '../DogCarousel/DogCarousel';

export class Header extends Component {
  render() {
    return (
        <section className="home">
          <div className="home-part-1">
            <div className="home-text-container">
              <h2 className="home-text-title">FIND YOUR PACK</h2>
              <p className="home-text-body">
              CrowdHound lets dog owners and enthusiasts find each other. You can see photos of the dogs and users, read each other's profiles, and filter by preferences (like dog age, weight and distance to you). When you find a profile you like, you can send them a message to connect.
              </p>
            </div>
            <img src={dogsHomePage} className="homepage-dogs-img" alt="three dogs sitting together"/>
          </div>
           <section className="home-carsouel">
           <DogCarousel/>
          </section>
        </section>
        
    )
  }
}

export default Header