const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello'));
app.get('/attribute', (req, res) => res.sendFile(__dirname + '/attribute.html'));
app.listen(3000, () => console.log('Listening on port 3000'));