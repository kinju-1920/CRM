const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;

  // Mock auth for now
  if (email === 'admin@crm.com' && password === '123456') {
    const token = jwt.sign({ id: 1, role: 'admin' }, process.env.JWT_SECRET);
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = {
  login,
};

