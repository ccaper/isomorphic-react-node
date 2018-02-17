const moment = require('moment');

exports.helloWorld = (req, res) => {
  res.json({ helloWorld: true });
};

exports.pathBodyTest = (req, res) => {
  const { id } = req.params;
  const { value1, value2 } = req.body;
  const now = moment();
  const result = {
    id,
    value1,
    value2,
    date: now.format()
  };
  res.json(result);
};
