const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
const serverDetails = {
  host: 'localhost',
  port: process.env.PORT || 3000,
};
const server = `${serverDetails.host}:${serverDetails.port}`;
chai.use(chaiHttp);

describe('GET /api/caseStudies', () => {
  
});

// describe('Express', function () {
//   it('responds to / with the index.html', function () {
//     return request(app)
//       .get('/')
//       .expect('Content-Type', /html/)
//       .expect(200)
//       .then(res => expect(res.text).to.contain('<div id="app"></div>'));
//   });

//   it('responds to any route with the index.html', function () {
//     return request(app)
//       .get('/foo/bar')
//       .expect('Content-Type', /html/)
//       .expect(200)
//       .then(res => expect(res.text).to.contain('<div id="app"></div>'));
//   });
// });
