import React, { Component } from 'react';
import './AddDog.css';
import { addDogQuery, createPhoto } from '../../api/apiCallsNew'
import ReactFileReader from 'react-file-reader';
import { connect } from 'react-redux';




export class AddDog extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      breed: '',
      birthdate: '',
      weight: 0,
      description: '',
      activityLevel: 0,
      photo: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFiles = (files) => {
    this.sendPhoto(files.base64)
  }

  sendDog = async () => {
    const {name, breed, birthdate, weight, activityLevel } = this.state
    let opts = {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({query: addDogQuery(
        name, activityLevel, breed, weight, birthdate
      )})
    }
    try{
      let response = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, opts)
      let parsedResponse = await response.json()
      await console.log(parsedResponse)
    } catch(error) {
      console.log(error)
    }

  }
  sendPhoto = async (file) => {
    let query = createPhoto('Dog',  this.props.id, 'Dog Photo')
    let photoOpts = {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        file: file
      })
    }
    try {
      await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}&query=${query}`, photoOpts)
    } catch(error) {
      await console.log(error)
    }

  }


  render() {
    return (
      <section className="add-dog">
        <form className="add-dog-form">
          <h4 className="add-dog-title">Add your dog</h4>
          <label for="dog-name-input" className="label">Name</label>
          <input id="dog-name-input" className="input" type="text" name="name" onChange={this.handleChange}/>
          <label for="dog-breed-input" className="label">Breed</label>
          <input id="dog-breed-input" className="input" type="text" name="breed" onChange={this.handleChange}/>
          <label for="dog-birthdate-input" className="label">Birthdate</label>
          <input id="dog-birthdate-input" className="input" type="date" name="birthdate" onChange={this.handleChange}/>
          <label for="dog-weight-input" className="label">Weight (lbs)</label>
          <input id="dog-weight-input" className="input" type="text" name="weight" onChange={this.handleChange}/>
          <label for="dog-description-input" className="label">Description</label>
          <textarea id="dog-description-input" className="input"  type="text" name="description" onChange={this.handleChange}></textarea>
          <label for="dog-activity-level-input" className="label" >Activity Level</label>
          <select id="dog-activity-level-input" className="input" name="activityLevel" onChange={this.handleChange}>
            <option vlaue="1">Low</option>
            <option vlaue="2">Medium</option>
            <option vlaue="3">High</option>
          </select>
          <label for="dog-photo-input" className="label">Photo</label>
          <ReactFileReader handleFiles={this.handleFiles} base64={true} multipleFiles={false}>
            <button id="dog-photo-input" className="input" type="button">Add photo</button>
          </ReactFileReader>
          <input type="button" className="input" value="Add" id="add-dog-btn"  onClick={this.sendDog}/>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  token: state.currentUser.token
})


export default connect(mapStateToProps)(AddDog)
