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
        longDesc: ${longDesc}
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

export const addDogQuery = (name, breed, birthdate, weight ,description, activityLevel) => `
  mutation {
    addDog(
      user: {
        name: ${name},
        breed: ${breed},
        birthdate: ${birthdate},
        weight: ${weight},
        description: ${description},
        activityLevel: ${activityLevel}
      }
    ) {
      currentDog {
        id
        name
        birthdate
        weight
        description
        activityLevel
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