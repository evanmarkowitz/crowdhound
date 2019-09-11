import React, { Component } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css';
import dogFace1 from '../../images/dog-face-1.jpg';
import userImage from '../../images/bradly-cooper.jpg';
import { Link } from 'react-router-dom';
// import { useQuery, RenderPromises } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';
import firebase from 'firebase';
import { setUserLoggedIn, setCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import { deleteDogQuery, logOutUserQuery, getUserQuery } from '../../api/apiCallsNew'


// export const GET_USER_QUERY = gql`
//   query getUser($id: ID!) {
//     user(id: $id) {
//       id
//       firstName
//       longDesc
//       photos {
//         sourceUrl
//       }
//       dogs {
//         id
//         name
//         photos {
//           sourceUrl
//         }
//       }
//     }
  
// }`

export class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      user: {},
      dogs: [],
      photos: [], 
      longDesc: ''
    }
  }

  async componentDidMount() {
    try {
      let response = await this.getUser()
      let user = await response.json()
      await this.setState({user})

    } catch(error) {
      console.log(error)
    }
  }


   setCookie = (c_name,value,exdays) =>
  {
     var exdate=new Date();
     exdate.setDate(exdate.getDate() + exdays);
     var c_value=escape(value) + ((exdays==null) ? "" : ("; expires="+exdate.toUTCString()));
     document.cookie=c_name + "=" + c_value;
  }

  // const dispatch = useDispatch()
  // const userLoggedIn = useSelector(state => state.userLoggedIn)

   
  // const id = parseInt(props.id)

  // const { loading, error, data } = useQuery(
  //   GET_USER_QUERY,
  //   { variables: { id } }
  // );

  // if(loading) return <p>Loading....</p>;
  // if(error) return <p>Error :</p>;
  // console.log(data)
   getUser = async () => {
    let opts = {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({query: getUserQuery(this.props.id)})
    }
    try{
      let response = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, opts)
      let parsedResponse = await response.json()
      let user = parsedResponse.data.user
      this.setState({user})
      this.setState({firstName: user.firstName  })
      this.setState({id: user.id})
      this.setState({dogs: user.dogs})
      this.setState({photos: user.photos})
      this.setState({longDesc: user.longDesc})
    } catch(error) {
      console.log(error)
    }
  }

  


     hanldeLogOut = () => {
      firebase.auth().signOut().then(function() {
         this.props.handleUserLoggedIn(false)
         this.props.handleCurrentUser({name: "", photoURL: ""})
         this.setCookie('user','', 21)
         this.logOutOfBackend()
      }).catch(function(error) {
        // console.log(error)
      });
    }

     logOutOfBackend = async () => {
      let opts = {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({query: logOutUserQuery})
      }
      try{
        let response = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, opts)
        let parsedResponse = await response.json()
        console.log(parsedResponse)
    
      } catch(error) {
        console.log(error)
      }

    }




     deleteDog = async (id) => {
      let opts = {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({query: deleteDogQuery(
          id
        )})
      }
      try{
        let response = await fetch(`http://staging-crowdhound-be.herokuapp.com/graphql?token=${this.props.token}`, opts)
        let parsedResponse = await response.json()
        this.getUser()
        console.log(parsedResponse)
    
      } catch(error) {
        console.log(error)
      }

    }

  

   

    render() {
      // console.log(this.props.userLoggedIn)
      console.log(parseInt(this.props.id))
      console.log(this.props.currentId)

    // const {firstName, longDesc, photos, dogs} = this.state.user

    const userImagePic = !this.state.photos[0] ? userImage : this.state.photos[0].sourceUrl
  //   const userImagePic = userImage

    const profileImageStyle = {
      backgroundImage: `url(${userImagePic})`,
      backgroundPosition: "center 1px",
      backgroundSize: "150px auto",
      backgroundRepeat: "no-repeat"
    }

  const dog = this.state.dogs.map(dog => {
    const dogImage = !dog.photos[0] ? dogFace1 : dog.photos[0].sourceUrl
    const dogImageStyle = {
      backgroundImage: `url(${dogImage})`,
      backgroundPosition: "center 1px",
      backgroundSize: "150px auto",
      backgroundRepeat: "no-repeat"
    }
  
    return (
      <div className="user-profile-dog" key={dog.id}>
        <Link to={`/dogprofile/${dog.id}`} className="dog-profile-img" style={dogImageStyle}></Link>
        <h5 className="dog-profile-name">{dog.name}</h5>
        {parseInt(this.props.id) === this.props.currentId && <button className="delete-dog-btn" onClick={() => this.deleteDog(dog.id)}>Delete dog</button>}
      </div>
    )
  })

    
  
    return (
      <section className="user-profile">
        <section  className="profile-img" style={profileImageStyle}></section>
           <h5 className="user-profile-name">{parseInt(this.props.id) === this.props.currentId && 'Welcome, '}{this.state.firstName}</h5>
         <div className="user-profile-content-container">
            <div className="user-profile-content-info">
                <h5 className="user-about-me-title">ABOUT ME</h5>
                <p className="user-about-me-body">
                   {this.state.longDesc}
                </p>
                 {
                    (this.props.userLoggedIn && parseInt(this.props.id) === this.props.currentId) &&
                    <button className="log-out" onClick={this.hanldeLogOut}>Log out</button>
                }
                
            </div>
            <div className="user-profile-content-dogs-title">
              <h5 className="user-about-me-title">DOGS</h5>
              <div className="user-profile-dogs-container">
                  {dog}
              </div>
              {
                    (this.props.userLoggedIn && parseInt(this.props.id) === this.props.currentId) &&
              <Link className="add-a-dog-link" to="/addingdog">Add a dog</Link>
            }
            </div>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  token: state.currentUser.token,
  currentId: state.currentUser.id,
  userLoggedIn: state.userLoggedIn
})

export const mapDispatchToProps = dispatch => ({
  handleUserLoggedIn: boolean => dispatch(setUserLoggedIn(boolean)),
  handleCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps)(UserProfile)
