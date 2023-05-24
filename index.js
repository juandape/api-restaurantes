const cors = require('cors');
const express = require('express');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');

const {
  handleGetAllRestaurants,
  handleGetByIdRestaurant,
  handleCreateRestaurant,
  handleEditRestaurant,
  handleDeleteRestaurant,
} = require('./controller');

app.use(cors());
const app = express();
const port = 8080;
const date = Date();

app.use(express.json());
app.use(bodyParser.json());
morganBody(app);


app.get('/api/restaurants', handleGetAllRestaurants);

app.get('/api/restaurants/:id', handleGetByIdRestaurant);

app.post('/api/restaurants', handleCreateRestaurant);

app.patch('/api/restaurants/:id', handleEditRestaurant);

app.delete('/api/restaurants/:id', handleDeleteRestaurant);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}!`)
);
