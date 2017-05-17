const chai = require('chai');
const chaiHttp = require('chai-http');
// const server = require('../src/server/app');
const should = chai.should();
const expect = chai.expect;
const serverDetails = {
  host: 'localhost',
  port: process.env.PORT || 3000,
};
const server = `${serverDetails.host}:${serverDetails.port}`;
chai.use(chaiHttp);

describe('GET /api/caseStudies', () => {
  let studyCount;
  it('should return an array', (done) => {
    chai.request(server)
        .get('/api/caseStudies')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          studyCount = res.body.length;
          console.log(studyCount)
          done();
        });
  });
  it('should return info about the added data', (done) => {
    const postData = {
      formUrl: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
      formEmail: 'guythomas721@gmail.com',
    };
    chai.request(server)
    // const url = req.body.formUrl;
    // const email = req.body.formEmail;
      .post('/api/caseStudies')
      .send(postData)
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('updated');
        response.body.should.have.property('isNewEmail');
        response.body.updated.should.be.a('object');
        response.body.updated.should.have.property('shortCode');
        response.body.updated.should.have.property('url');
        response.body.updated.should.have.property('email');
        expect(response.body.isNewEmail).to.be.true;
        done();
      });
  });
  it('should return details that match the submitted form data', (done) => {
    const postData = {
      formUrl: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
      formEmail: 'guythomas721@gmail.com',
    };
    chai.request(server)
    // const url = req.body.formUrl;
    // const email = req.body.formEmail;
      .post('/api/caseStudies')
      .send(postData)
      .end((error, response) => {
        response.body.updated.url.should.equal(postData.formUrl);
        response.body.updated.email.should.equal(postData.formEmail);
        expect(response.body.isNewEmail).to.be.false;
        done();
      });
  });
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
