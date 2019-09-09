import React, { Component } from 'react';
import './AddDog.css';

export class AddDog extends Component {

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
          <input id="dog-name-input" className="input" type="text" />
          <label for="dog-breed-input" className="label">Breed</label>
          <input id="dog-breed-input" className="input" type="text" />
          <label for="dog-birthdate-input" className="label">Birthdate</label>
          <input id="dog-birthdate-input" className="input" type="date" />
          <label for="dog-weight-input" className="label">Weight</label>
          <input id="dog-weight-input" className="input" type="text" />
          <label for="dog-description-input" className="label">Description</label>
          <input id="dog-description-input" className="input" type="text" />
          <label for="dog-activity-level-input" className="label">Activity Level</label>
          <select id="dog-activity-level-input" className="input">
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
