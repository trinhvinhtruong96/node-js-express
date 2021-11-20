const express = require('express');

const app = express();

app.get('/api/v1/tours', (req, res) => {
    res.status(200).send('Hello from the server sides!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})