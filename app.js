const express = require('express');
const app = express();
const port = 3000;
const data = require('./data/products.json');

// Serve static files from the public folder
app.use(express.static('public'));

// API Route to send JSON data
app.get('/api/products', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});