module.exports = {
  headers: {
    method: 'post',
    headers: {
      'Content-Type': 'application/JSON',
    },
  },
  newUserStudy: ( url, email ) => ({
    body: JSON.stringify({
      query: `mutation ($url: String!, $email: String!){
        newUserStudy(email:$email, url:$url) {
          url,
          shortCode,
          user {
            email
          }
        }
      }`,
      variables: { url, email }, // GraphQL text from input
    }),
  }),
};
