const UserController = require('../UserController');

// Mock response object for testing
const mockResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(data => data)
};

describe('User class', () => {
  let user;

  beforeEach(() => {
    user = new UserController();
  });

  it('should register a new user', async () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    await user.register({ body: userData }, mockResponse);

    expect(user.users).toHaveLength(1);
    expect(user.users[0]).toMatchObject({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    });
  });
});
