// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });
require('babel-core/register');
require('babel-polyfill');

// Start our app!
const app = require('./app');

app.listen(7775, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7775');
});
