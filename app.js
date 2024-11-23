const express = require('express');
const app = express();
const PORT = process.env.PORT || 2029;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(2029, '0.0.0.0', () => {
    console.log('Server is running on port 2029');
});
