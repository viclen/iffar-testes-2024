const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes');

describe('User routes', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/user', userRoutes);
  });

  it('should register a new user', async () => {
    const userData = {
      firstName: 'Joao',
      lastName: 'Silva',
      email: 'joao@example.com',
      password: 'password123'
    };

    const res = await request(app)
      .post('/user/register')
      .send(userData);

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual('User registered successfully');
  });
});
