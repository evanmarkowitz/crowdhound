import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddUserDetail.css';
import { addUserDetailsQuery, createPhoto } from '../../api/apiCallsNew'
import ReactFileReader from 'react-file-reader';
import { Link } from 'react-router-dom'


export class AddUserDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      street: '',
      city: '',
      st: '',
      zip: '',
      photo: '', 
    }
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  handleFiles = (files) => {
    this.sendPhoto(files.base64)
  }

  sendUser = async () => {
    const {firstName, lastName} = this.props
    const {description, street, city, st, zip } = this.state
    let opts = {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({query: addUserDetailsQuery(
        firstName, lastName, description, `"${street}"`, city, `"${st}"`, `"${zip}"`
      )})
    }
    try{
      let response = await fetch(`https://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, opts)
      let parsedResponse = await response.json()
      await console.log(parsedResponse)

    } catch(error) {
      this.setState({sucessMessage: error})
      console.log(error)
    }
  }
  
  sendPhoto = async (file) => {
    let query = createPhoto('User',  this.props.id, 'User Photo')
    let photoOpts = {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        file: file
      })
    }
    try {
      await fetch(`https://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}&query=${query}`, photoOpts)
    } catch(error) {
      await console.log(error)
    }
  }

  render() {

    return (
      <section className="add-user-detail">
        <form className="add-user-detail-form">
          <h4 className="add-user-detail-title">Add your information</h4>
          <label for="user-detail-first-name-input" className="label">First Name</label>
          <p>{this.props.firstName}</p>
          <label for="user-detail-last-name-input" className="label">Last Name</label>
          <p>{this.props.lastName}</p>
          <label for="user-detail-email-input" className="label">Email</label>
          <p>{this.props.email}</p>
          <label for="user-detail-description-input" className="label">Description</label>
          <textarea id="user-detail-description-input" className="input"  type="text" value={this.state.description}
          name='description' onChange={this.handleChange}></textarea>
          <label for="user-detail-address-input" className="label">Address</label>
          <div className="address-container">
            <input className="address-input" type="text" placeholder="Street" value={this.state.street} name='street' onChange={this.handleChange}/>
            <input className="address-input" type="text" placeholder="City" value={this.state.city} name='city' onChange={this.handleChange}/>
            <input className="address-input" type="text" placeholder="State" value={this.state.st} name='st' onChange={this.handleChange}/>
            <input className="address-input" type="number"  max="5" placeholder="Zip" value={this.state.zip} name='zip' onChange={this.handleChange}/>
          </div>
          <label className="label">Photo</label>
          <ReactFileReader handleFiles={this.handleFiles} base64={true} multipleFiles={false}>
            <button id="user-detail-photo-input" className="input"  name='file' value='add-photo' type='button'>Add photo</button>
          </ReactFileReader>
          <Link to={`/userprofile/${this.props.id}`}>
            <input type="button" className="input" value="Add" id="add-user-detail-btn" onClick={this.sendUser}/> 
          </Link>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  firstName: state.currentUser.firstName,
  lastName: state.currentUser.lastName,
  email: state.currentUser.email,
  token: state.currentUser.token,
  id: state.currentUser.id
})

export default connect(mapStateToProps)(AddUserDetail)
