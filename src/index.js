require('dotenv/config');
const express = require('express');
const cors = require('cors')
const {sequelize} = require('./models');
const app = express();

app.use(cors());

app.use(express.json());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

//router
app.use('/', require('./routes'))

app.listen(8080, async () => {
  console.log('API is running on http://localhost:8080');
  await sequelize.authenticate();
  console.log("database connected!!")
});