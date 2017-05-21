const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../src/server/index.js');
// const server = require('../src/server/app');
const should = chai.should();
const expect = chai.expect;
const mockdata = require('../mocks.js');

chai.use(chaiHttp);

describe('/api/caseStudies', () => {
  it('should return an array', (done) => {
    chai.request(server)
        .get('/api/caseStudies')
        .end((err, res) => {
          console.log('The res', res.body);
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          studyCount = res.body.length;
          done();
        });
  });
  it('create a new case study', (done) => {
    chai.request(server)
        .post('/api/caseStudies')
        .set('Content-Type', 'application/JSON')
        .send(JSON.stringify(mockdata.post.caseStudies.req))
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          // res.body.isNewEmail.should.be.false; //Waiting to implement a clearing  the database route
          res.body.updated.should.exist;
          res.body.updated.should.be.an.object;
          res.body.updated.should.deep.equal(mockdata.post.caseStudies.res.updated);
          done();
        });
  });
});