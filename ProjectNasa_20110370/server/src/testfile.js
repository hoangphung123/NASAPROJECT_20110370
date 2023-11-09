const request = require('supertest');
const app = require('./app');
const assert = require('assert');
const axios = require('axios');
const { error } = require('console');

const url = 'http://localhost:8000/planets';

describe('GET /launches', () => {
    it('should return a 200 status code and a valid JSON response', (done) => {
        request(app)
        .get('/launches')
        .expect(200)
        .expect('content-type', /json/)
        .end((err, res) => {
            if (err) return done(err);

            const responseData = res.body;
            console.log('JSON response:', responseData)

            done();
        })
    })
})

describe('GET /planets', () => {
    it('should return a 200 status code and a valid JSON response', (done) => {
        request(app)
        .get('/planets')
        .expect(200)
        .expect('content-type', /json/)
        .end((err, res) => {
            if (err) return done(err);

            const responseData = res.body;
            console.log('JSON response:', responseData)

            done();
        })
    })
})

describe('POST /launches', () => {
    it('should return a 201 status code and a valid JSON response', (done) => {
      request(app)
        .post('/launches')
        .send({
            "mission": "ZTM155",
            "rocket": "ZTM Experimental IS1",
            "target": "kepler-442 b",
            "launchDate": "123"
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
});

describe('DELETE /launches/100', () => {
    it('should return a 200 status code', (done) => {
        request(app)
        .delete('/launches/100')
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            done();
        })
    })
})

axios.get(url)
  .then(response => {
    const responseData = response.data;
    // Làm gì đó với dữ liệu phản hồi ở đây
    console.log(responseData); // In dữ liệu JSON ra màn hình
  })
  .catch(error => {
    console.error('Lỗi khi gọi API:', error);
});


