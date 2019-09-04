import React, { Component } from 'react';
import './Home.css';
import dogsHomePage from '../../images/dogs-homepage.jpg';

export class Header extends Component {
  render() {
    return (
        <section className="home">
          <div className="home-part-1">
            <div className="home-text-container">
              <h2 className="home-text-title">FIND YOUR PACK</h2>
              <p className="home-text-body">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,
                sed do eiusmod tempor
                incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
            <img src={dogsHomePage} className="homepage-dogs-img" alt="three dogs sitting together"/>
          </div>
           <section className="home-carsouel">

          </section>
        </section>
        
    )
  }
}

export default Header