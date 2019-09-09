import React, { Component } from 'react';
import './AddUserDetail.css';

export class AddUserDetail extends Component {

  //  loadImg = (e) => {
  //   e.preventDefault();
  //   if (chooseFile.files[0]){
  //     reader.readAsDataURL(chooseFile.files[0]);
  //     reader.onload = makeImg;
  //   }
  // }

  render() {
    return (
      <section className="add-user-detail">
        <form className="add-user-detail-form">
          <h4 className="add-user-detail-title">Add your information</h4>
          <label for="user-detail-first-name-input" className="label">First Name</label>
          <input id="user-detail-first-name-input" className="input" type="text" />
          <label for="user-detail-last-name-input" className="label">Last Name</label>
          <input id="user-detail-last-name-input" className="input" type="text" />
          <label for="user-detail-email-input" className="label">Email</label>
          <input id="user-detail-email-input" className="input" type="email" />
          <label for="user-detail-description-input" className="label">Description</label>
          <textarea id="user-detail-description-input" className="input"  type="text" ></textarea>

          <label for="user-detail-address-input" className="label">Address</label>
          <div className="address-container">
            <input className="address-input" type="text" placeholder="Street"/>
            <input className="address-input" type="text" placeholder="City"/>
            <input className="address-input" type="text" placeholder="State"/>
            <input className="address-input" type="number"  max="5" placeholder="Zip"/>
          </div>


          <label className="label">Photo</label>
          <input id="user-detail-photo-input" className="input" type="file" />
          <input type="button" className="input" value="Add" id="add-user-detail-btn" />
        </form>
      </section>
    )
  }
}

export default AddUserDetail;
