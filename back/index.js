const PORT = '8080';
const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const path = require('path');
// const multer = require('multer');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the homepage !');
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
