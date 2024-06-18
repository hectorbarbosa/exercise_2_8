const data = require('../../postgres-data');

module.exports = async (req, res, next) => {
  const id = req.params.id;
  const result = await data.deleteUser(id);

  if (result === true) {
    res.json(result);
  } else if (result === 'invalid id')  {
    res.status(404).json({ message: 'Invalid id' });
  } else if (result === false) {
    res.status(500).json({ message: 'Internal error' });
  }
}
