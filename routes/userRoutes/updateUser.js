const data = require('../../postgres-data');

module.exports = (req, res, next) => {
  const id = req.params.id;

  let body = '';

  req.on('data', chunk => {
  body += chunk;
  });

  req.on('end', async () => {
    const parsedBody = new URLSearchParams(body);
    const updatedParams = {}
    // console.log(parsedBody);

    parsedBody.forEach((value, key) => updatedParams[key] = value);
    updatedParams.id = id;
    // console.log(updatedParams);
    const result = await data.updateUser(id, updatedParams);

    if (result) {
      if (result === 'invalid id') {
        res.writeHead(404);
        res.status(404).json({ message: 'Invalid id' });
      } else {
        res.json(result);
      }
    } else {
      res.status(500).json({ message: 'Internal error' });
    }
  });
}
