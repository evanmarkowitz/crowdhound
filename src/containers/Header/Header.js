import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/crowd-hound-logo-2.png';
import { connect } from 'react-redux';
import { toggleFilterModal } from '../../actions';
import { Link } from 'react-router-dom';

export class Header extends Component {

  toggleBurger = () => {
    const {toggleFilterModal,  toggleFilterValue} = this.props
    toggleFilterModal(!toggleFilterValue)
  }

  activeBurgerStyle = () => {
    const {toggleFilterValue} = this.props;
    return toggleFilterValue ? {background: '#1dbbdf'} : {background: 'gray'}
  }

  render() {
    return (
      <header className="header">
        <section className="burger-container" >
            <button className="burger-btn" onClick={this.toggleBurger}></button>
            <div style={this.activeBurgerStyle()} className="burger-line burger-line-1"></div>
            <div style={this.activeBurgerStyle()} className="burger-line burger-line-2"></div>
            <div style={this.activeBurgerStyle()} className="burger-line burger-line-3"></div>
        </section>
        <Link to="/" className="logo"><img src={logo} alt="logo"  className="logo-inside"/></Link>
      </header>
    )
  }
}

export const mapStateToProps = state => ({
  toggleFilterValue:  state.toggleFilterValue,
})

export const mapDispatchToProps = dispatch => ({
  toggleFilterModal: boolean => dispatch(toggleFilterModal(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)