const data = require('../../postgres-data');

module.exports = async (req, res, next) => {
  const id = req.params.id;
  const result = await data.getUserById(id);

  if (result) {
    if (result === 'user not found') {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(result);
    }
  } else if (result === false) {
    res.status(500).json({ message: 'Internal error' });
  }
}
