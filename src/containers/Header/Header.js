import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/crowd-hound-logo-2.png';

class Header extends Component {

  toggleBurger = () => {
    console.log('okkk')
  }
  render() {
    return (
      <header className="header">
        <section className="burger-container" >
            <button className="burger-btn" onClick={this.toggleBurger}></button>
            <div className="burger-line burger-line-1"></div>
            <div className="burger-line burger-line-2"></div>
            <div className="burger-line burger-line-3"></div>
        </section>
        <img src={logo} alt="logo" className="logo" />
      </header>
    )
  }
}

export default Header