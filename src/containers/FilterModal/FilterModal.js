import React, { Component } from 'react'
import './FilterModal.css'
import { toggleFilterModal, setDistanceValue, setActivityLevel, setDogSize } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  LogIn  from '../LogIn/LogIn';


export class FilterModal extends Component {

  state = {
    activityLevel: 0,
    dogSize: 'small',
    distance: 10
  }

  componentDidMount () {
    this.setState({activityLevel: this.props.activityLevel, dogSize: this.props.dogSize, distance: this.props.distance})
  }
  

  clickFinder = () => {
    this.props.toggleFilterModal(false)
    this.props.handleDistanceValue(parseInt(this.state.distance));
    this.props.handleActivityLevel(parseInt(this.state.activityLevel));
    this.props.handleDogSize(this.state.dogSize);
  }

  moveSlider = e => {
    this.setState({distance: e.target.value})
  }

  clickFilter = e => {
    if (e.target.name === 'activityLevel') {
      this.setState({activityLevel: e.target.value})
    } else {
      this.setState({dogSize: e.target.value})
    }
  }

  dogSizeBtnStyle = option => {
    const { dogSize } = this.state;
    if (option === dogSize) {
      return {background: '#1dbbdf'}
    } else {
      return {background: '#1dbcdf77'}
    }
  }

  activeLevelBtnStyle = option => {
    const { activityLevel } = this.state;
    if (option === parseInt(activityLevel)) {
      return {background: '#1dbbdf'}
    } else {
      return {background: '#1dbcdf77'}
    }
  }
  
  render() {

    const userProfileStyle = {
      backgroundImage: `url(${this.props.currentUser.photoURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }


    return(
      <article className='modal-wrapper'>
        <section className='modal-card'>
          <div className='filters'>
            <section className='column dog-size'>
              <h2>DOG SIZE</h2>
              <button style={this.dogSizeBtnStyle('small')} id="small-size" name='size' value='small' onClick={this.clickFilter} className="filter-btn">
                Small:  0-15lbs
              </button>
              <button style={this.dogSizeBtnStyle('medium')} name='size' value='medium' onClick={this.clickFilter} className="filter-btn">
                Medium: 16-40lbs
              </button>
              <button style={this.dogSizeBtnStyle('large')} name='size' value='large' onClick={this.clickFilter} className="filter-btn">
                Large:  41- 100lbs
              </button>
            </section>
            <section className='column activity'>
              <h2>ACTIVITY</h2>
              <button style={this.activeLevelBtnStyle(0)} name='activityLevel' value={0} onClick={this.clickFilter} className="filter-btn">Low</button>
              <button style={this.activeLevelBtnStyle(1)} name='activityLevel' value={1} onClick={this.clickFilter} className="filter-btn">Average</button>
              <button style={this.activeLevelBtnStyle(2)} name='activityLevel' value={2} onClick={this.clickFilter} className="filter-btn">High</button>
            </section>
            <section className='column distance'>
              <h2>DISTANCE</h2>
              <div className='distance-box'>
                <p>{this.state.distance} miles</p>
              </div>
              <input type="range" min="1" max="50" value={this.state.distance} className="slider" id="myRange" onChange={this.moveSlider} />
              <p id='zip-code'>Zip Code: 80211</p>
            </section>
          </div>
          <aside className='right-modal'>
            <Link to="/results" id='find-button' onClick={this.clickFinder}>FIND</Link>
            <div className='user-section'>
              {
                !this.props.userLoggedIn ?
                  <LogIn /> :
                  <>
               <Link to={`/userprofile/${2}`} className="go-to-user-profile" onClick={this.clickFinder}><div id='user-image' style={userProfileStyle} className='dog-card-img'></div></Link>
               <p className='user-name'>{this.props.currentUser.firstName + " " + this.props.currentUser.lastName}</p>
               </>
              }
            </div>
          </aside>
        </section>
        <section className='background' onClick={this.clickFinder}/>
      </article>
    )
  }
}

export const mapStateToProps = state => ({
  distance: state.distance,
  dogSize: state.dogSize,
  activityLevel: state.activityLevel,
  userLoggedIn: state.userLoggedIn,
  currentUser: state.currentUser
})

export const mapDispatchToProps = dispatch => ({
  toggleFilterModal: boolean => dispatch(toggleFilterModal(boolean)),
  handleDistanceValue: distance => dispatch(setDistanceValue(distance)),
  handleActivityLevel: level => dispatch(setActivityLevel(level)),
  handleDogSize: size => dispatch(setDogSize(size))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal)