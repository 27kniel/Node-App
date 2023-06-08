npm init -y
npm install express
const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
node server.js
