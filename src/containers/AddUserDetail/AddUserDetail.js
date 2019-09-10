import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddUserDetail.css';
import { addUserDetailsQuery } from '../../api/apiCallsNew'

export class AddUserDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      street: '',
      city: '',
      st: '',
      zip: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
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
    let res = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, opts)
    let response = await res.json()
    await console.log(response)
  }

  render() {
    return (
      <section className="add-user-detail">
        <form className="add-user-detail-form">
          <h4 className="add-user-detail-title">Add your information</h4>
          <label for="user-detail-first-name-input" className="label">First Name</label>
          {/* <input id="user-detail-first-name-input" className="input" type="text" name='firstName' 
          onChange={this.handleChange} value={this.state.firstName} /> */}
          <p>{this.props.firstName}</p>
          <label for="user-detail-last-name-input" className="label">Last Name</label>
          {/* <input id="user-detail-last-name-input" className="input" type="text" /> */}
          <p>{this.props.lastName}</p>
          <label for="user-detail-email-input" className="label">Email</label>
          {/* <input id="user-detail-email-input" className="input" type="email" /> */}
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
          <input id="user-detail-photo-input" className="input" type="file" />
          <input type="button" className="input" value="Add" id="add-user-detail-btn" onClick={this.sendUser}/>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  firstName: state.currentUser.firstName,
  lastName: state.currentUser.lastName,
  email: state.currentUser.email,
  token: state.currentUser.token
})


export default connect(mapStateToProps)(AddUserDetail)
