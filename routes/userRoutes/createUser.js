const data = require('../../postgres-data');

module.exports = (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', async () => {
    const parsedBody = new URLSearchParams(body);
    const name = parsedBody.get('name');
    const age = parsedBody.get('age');

    if (name && age) {
      const user = { name, age: parseInt(age) };
      const newUser = await data.addUser(user);
      res.json(newUser);
    } else {
      res.status(400).json({ message: 'Name and age are required' });
    }
  });
};
