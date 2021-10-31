const express = require('express');
const app = express();

app.use('/js', express.static('./public/common/js/'));

app.get('/', (req, res) => res.send('Hello'));
app.get('/attribute', (req, res) => res.sendFile(__dirname + '/public/attribute.html'));

app.listen(3000, () => console.log('Listening on port 3000'));