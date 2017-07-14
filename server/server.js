const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const PORT = 5000;
// const bodyparser = require('body-parser');
// const cookieparser = require('cookie-parser');

// app.use(cookieparser());
app.use('/static', express.static(path.join(__dirname, '..', 'build')));
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
})

app.listen(PORT);
console.log('Listening on Port 4000');
