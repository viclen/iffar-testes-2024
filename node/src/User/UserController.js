const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
  constructor() {
    // Dummy database (Replace with an actual database in production)
    this.users = [];

    this.resetUsers();
  }

  resetUsers() {
    this.users = [
      {
        id: 1,
        firstName: 'Example',
        lastName: 'User',
        email: 'user@example.com',
        password: bcrypt.hashSync('12345678', 10)
      }
    ];
  }

  async register(req, res) {
    try {
      // Check if the user already exists
      const existingUser = this.users.find(user => user.email === req.body.email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create a new user object
      const newUser = {
        id: this.users.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
      };

      // Add the user to the database
      this.users.push(newUser);

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async login(req, res) {
    try {
      // Find the user by email
      const user = this.users.find(user => user.email === req.body.email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, 'SECRET_123', { expiresIn: '1h' });

      res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  getInfo(req, res) {
    // Extract token from request headers
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, 'SECRET_123');
      const userId = decoded.userId;

      // Find the user by ID
      const user = this.users.find(user => user.id === userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ user: { ...user, password: undefined } });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  }
}

module.exports = UserController;
