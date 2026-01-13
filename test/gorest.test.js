const request = require('supertest');
const expect = require('chai').expect;
require('dotenv').config();

describe('GoRest API Testing - User Management', () => {
  const baseUrl = process.env.BASE_URL;
  const token = process.env.TOKEN;
  let userId;

  // Skenario 1: Create a New User
  it('should successfully create a new user', async () => {
    const newUser = {
      name: 'Gemini Test User',
      gender: 'male',
      email: `testuser_${Date.now()}@example.com`, // Email harus unik
      status: 'active'
    };

    const response = await request(baseUrl)
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send(newUser);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body.name).to.equal(newUser.name);
    
    // Simpan ID untuk pengujian selanjutnya
    userId = response.body.id;
  });

  // Skenario 2: Get User Details
  it('should fetch the details of the created user', async () => {
    const response = await request(baseUrl)
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(userId);
    expect(response.body).to.have.property('email');
  });

  // Skenario 3: Update User Details
  it('should update the user details', async () => {
    const updatedData = {
      name: 'Gemini Updated Name',
      status: 'inactive'
    };

    const response = await request(baseUrl)
      .put(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedData);

    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal(updatedData.name);
    expect(response.body.status).to.equal(updatedData.status);
  });

  // Skenario 4: Delete User
  it('should delete the created user', async () => {
    const response = await request(baseUrl)
      .delete(`/users/${userId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).to.equal(204);
  });
});
