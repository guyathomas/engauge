module.exports = {
  headers: {
    method: 'post',
    headers: {
      'Content-Type': 'application/JSON',
    },
  },
  getStudies: {
    body: JSON.stringify({ query: '{studies {id,url,shortCode,}}' }),
  },
  getSessions: shortCode => ({
    body: JSON.stringify({
      query: `query ($shortCode: String!){
         study(shortCode: $shortCode) {
           url,
           session {
             id,
             recording,
             duration
           }
         }
       }`,
      variables: { shortCode }, // GraphQL text from input
    }),
  }),
  getStudy: shortCode => ({
    body: JSON.stringify({
      query: `query ($shortCode: String!){
       study(shortCode: $shortCode) {
         id,
         url
       }
      }`,
      variables: { shortCode }, // GraphQL text from input
    }),
  }),
};
