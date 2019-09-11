import React, { Component } from 'react';
import './AddDog.css';
import { addDogQuery, createDogPhoto } from '../../api/apiCallsNew'


export class AddDog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      breed: '',
      birthdate: '',
      weight: 0,
      description: '',
      activityLevel: '',
      photo: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  sendUser = async () => {
    const {name, breed, birthdate, weight ,description, activityLevel } = this.state
    let opts = {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({query: addDogQuery(
        name, breed, birthdate, weight ,description, activityLevel
      )})
    }
    let res = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, opts)

    // let photoOpts = {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json"},
    //   body: JSON.stringify({query: createPhoto('User',  this.props.id, 'User Photo',this.state.photo)})
    // }
    // try {
    //   let photos = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, photoOpts)
    //   // let parsedPhotos = await photos.json()
    //   await console.log(photos)
    // } catch(error) {
    //   await console.log(error)
    // } 
   
  }



  //  loadImg = (e) => {
  //   e.preventDefault();
  //   if (chooseFile.files[0]){
  //     reader.readAsDataURL(chooseFile.files[0]);
  //     reader.onload = makeImg;
  //   }
  // }

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
          <input id="dog-photo-input" className="input" type="file" />
          <input type="button" className="input" value="Add" id="add-dog-btn" />
        </form>
      </section>
    )
  }
}

export default AddDog;
