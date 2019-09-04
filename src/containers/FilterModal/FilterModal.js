import React, { Component } from 'react'
import './FilterModal.css'
import { toggleFilterModal } from '../../actions';
import { connect } from 'react-redux'


export class FilterModal extends Component {
  constructor() {
    super()
    this.state = {
      distanceValue: 10,
      activityLevel: '',
      size: ''
    }
  }

  moveSlider = e => {
    this.setState({distanceValue: e.target.value })
  }

  clickFinder = () => {
    this.props.toggleFilterModal(false)
  }

  clickFilter = e => {
    console.log(e.target)
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    return(
      <article className='modal-wrapper'>
        <section className='modal-card'>
          <div className='filters'>
            <section className='column dog-size'>
              <h2>DOG SIZE</h2>
              <button name='size' value='small' onClick={this.clickFilter}>
                <span className='size' name='size' value='small'>Small</span>
                <span className='weight' name='size' value='small'>05-15lbs</span>
              </button>
              <button name='size' value='medium' onClick={this.clickFilter}>
                <span className='size' name='size' value='medium'>Medium</span>
                <span className='weight' name='size' value='medium'>16-40lbs</span>
              </button>
              <button name='size' value='large' onClick={this.clickFilter}>
                <span className='size' name='size' value='large'>Large</span>
                <span className='weight' name='size' value='large'>41- 100lbs</span>
              </button>
            </section>
            <section className='column activity'>
              <h2>ACTIVITY</h2>
              <button name='activityLevel' value={0} onClick={this.clickFilter}>Low</button>
              <button name='activityLevel' value={1} onClick={this.clickFilter}>Average</button>
              <button name='activityLevel' value={2} onClick={this.clickFilter}>High</button>
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
            <button id='find-button' onClick={this.clickFinder}>FIND</button>
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
});

export default connect(null, mapDispatchToProps)(FilterModal)