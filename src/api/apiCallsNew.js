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

