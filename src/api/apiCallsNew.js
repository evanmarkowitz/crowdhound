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


