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
  newUserStudy: (url, email) => ({
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
  postSession: (recording, duration, shortCode) => ({
    body: JSON.stringify({
      query: `mutation ($recording: JSON!, $duration: Int!, $shortCode: String!){
             addSession(recording:$recording, duration:$duration, shortCode:$shortCode) {
               id
             }
           }`,
      variables: { recording, duration, shortCode },
    }),
  }),
};
