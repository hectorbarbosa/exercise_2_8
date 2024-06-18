const data = require('../../postgres-data');

module.exports = async (req, res, next) => {
  const users = await data.getUsers();
  if (users === null) {
    res.status(500).json({ message: 'Internal error' });
  } else {
    res.json(users);
  }
}
