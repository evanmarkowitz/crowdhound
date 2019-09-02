import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/crowd-hound-logo-2.png';

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
    )
  }
}

export default Header