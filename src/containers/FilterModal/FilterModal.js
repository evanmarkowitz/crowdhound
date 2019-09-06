import React, { Component } from 'react'
import './FilterModal.css'
import { toggleFilterModal, setFilterCriteria } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class FilterModal extends Component {
  constructor() {
    super()
    this.state = {
      distanceValue: 10,
      activityLevel: 0,
      size: 'small'
    }
  }

  moveSlider = e => {
    this.setState({distanceValue: e.target.value })
    const { activityLevel, size } = this.state;
    this.props.handleUpdateCriteria({ distanceValue: e.target.value, activityLevel, size });
  }

  clickFinder = () => {
    this.props.toggleFilterModal(false)
  }


  clickFilter = e => {  
    this.setState({[e.target.name]: e.target.value})
    const { distanceValue, activityLevel, size } = this.state;
    if (e.target.name === 'activityLevel') {
      this.props.handleUpdateCriteria({ distanceValue, activityLevel: e.target.value, size});
    } else {
      this.props.handleUpdateCriteria({ distanceValue, activityLevel, size: e.target.value});
    }
  }

  dogSizeBtnStyle = option => {
    const { size } = this.state;
    if (option === size) {
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
                <p>{this.state.distanceValue} miles</p>
              </div>
              <input type="range" min="1" max="50" value={this.state.distanceValue} className="slider" id="myRange" onChange={this.moveSlider} />
              <p id='zip-code'>Zip Code: 80211</p>
            </section>
          </div>
          <aside className='right-modal'>
            <Link to="/results" id='find-button' onClick={this.clickFinder}>FIND</Link>
            <div className='user-section'>
              <div id='user-image'></div>
              <p className='user-name'>User Name</p>
            </div>
          </aside>
        </section>
        <section className='background' onClick={() => this.props.toggleFilterModal(false)}/>
      </article>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  toggleFilterModal: boolean => dispatch(toggleFilterModal(boolean)),
  handleUpdateCriteria: criteria => dispatch(setFilterCriteria(criteria))
});

export default connect(null, mapDispatchToProps)(FilterModal)