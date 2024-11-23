const express = require('express');
const app = express();
const PORT = process.env.PORT || 2020;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(2021, '0.0.0.0', () => {
    console.log('Server is running on port 2020');
});
