export const mutation = (apiKey, auth) => `
    mutation {
      authenticateUser(apiKey: ${apiKey}, auth: ${auth})
      {
        currentUser {
          id
          firstName
          lastName
          email
        }
        new
        token
      }
    }
  `
;

export const addUserDetailsQuery = (firstName, lastName, longDesc, streetAddress, city, state, zipCode) => `
  mutation {
    updateUser(
      user: {
        firstName: ${firstName},
        lastName: ${lastName},
        shortDesc: "",
        longDesc: "${longDesc}"
      },
      location: {
        streetAddress: ${streetAddress},
        city: ${city},
        state: ${state},
        zipCode: ${zipCode}
      }
    ) {
      currentUser {
        id
        firstName
        lastName
        shortDesc
        longDesc
        location {
          id
          streetAddress
          city
          state
          zipCode
        }
      }
    }
  }
`

export const createPhoto = (photoableType, id, caption) => `
mutation {
  createPhoto(
    photo: {
      photoableType: "${photoableType}",
      photoableId: ${id},
      caption: "${caption}"
    }
  ) {
    photo {
      id
      photoableId
      photoableType
      caption
      sourceUrl
    }
  }
}
`

export const addDogQuery = (name, activityLevel, breed, weight, birthdate) => `
  mutation {
    createDog(
      dog: {
        name: "${name}",
        activityLevel: ${activityLevel},
        breed: "${breed}",
        weight: ${weight},
        birthdate: "${birthdate}",
      }
    ) {
      dog {
        id
        name
        age
      }
    }
  }
`

export const createDogPhoto = (photoableType, id, caption) => `
mutation {
  createPhoto(
    photo: {
      photoableType: "${photoableType}",
      photoableId: ${id},
      caption: "${caption}"
    }
  ) {
    photo {
      id
      photoableId
      photoableType
      caption
      sourceUrl
    }
  }
}
`

export const deleteDogQuery = (id) => `
mutation {
  destroyDog(dogId: ${id}) {
    message
  }
}
`

export const logOutUserQuery = `

mutation {
  logOutUser
  {
    message
  }
}

`