module.exports = {
  headers: {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/JSON',
    },
  },
  newUserStudy: ( url, email ) => ({
    body: JSON.stringify({
      query: `mutation ($url: String!, $email: String!){
        newUserStudy(email:$email, url:$url) {
          shortCode
        }
      }`,
      variables: { url, email }, // GraphQL text from input
    }),
  }),
};
