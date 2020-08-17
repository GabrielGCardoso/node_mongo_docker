// Import the dependencies for testing
const chai = require('chai') ;
const chaiHttp = require('chai-http');
const app = require('../index');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("clients", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should return a mock object", (done) => {
             chai.request(app)
                 .get('/client/test')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});