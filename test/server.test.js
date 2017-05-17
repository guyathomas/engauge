const chai = require('chai');
const chaiHttp = require('chai-http');
// const server = require('../src/server/app');
const should = chai.should();
const serverDetails = {
  host: 'localhost',
  port: process.env.PORT || 3000,
};
const server = `${serverDetails.host}:${serverDetails.port}`;
chai.use(chaiHttp);

describe('GET /api/caseStudies', () => {
  it('should return an array', (done) => {
    chai.request(server)
        .get('/api/caseStudies')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          done();
        });
  });
  it('should return no casestudies before mock', (done) => {
    chai.request(server)
        .get('/api/caseStudies')
        .end((err, res) => {
          res.body.should.be.empty;
          done();
        });
  });
  // it('should return no casestudies before mock', (done) => {
  //   chai.request(server)
  //   // const url = req.body.formUrl;
  //   // const email = req.body.formEmail;
  //     .post('/api/caseStudies')
  //     .send({
  //       url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
  //       email: 'guythomas721@gmail.com',
  //     })
  //     .end((error, response) => {
  //       console.log(response)
  //       response.should.have.status(200);
  //       response.should.be.json;
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('updated');
  //       response.body.updated.should.be.a('object');
  //       response.body.updated.should.have.property('name');
  //       response.body.updated.should.have.property('_id');
  //       response.body.updated.name.should.equal('Spider');
  //       done();
  //     });
  // });
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
