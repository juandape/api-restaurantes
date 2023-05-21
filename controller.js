const {
  getAllRestaurants,
  getRestaurantsById,
  createRestaurant,
  editRestaurant,
  deleteRestaurant,
  getLength,
} = require('./model');

function handleGetAllRestaurants(req, res) {
  const records = getAllRestaurants();
  res.status(200).json(records);
}

function handleGetByIdRestaurant(req, res) {
  const { id } = req.params;
  const record = getRestaurantsById(id);
  res.status(200).json(record);
}

function handleCreateRestaurant(req, res) {
  const restaurant = req.body;
  const { name, schedules, category, address, logo } = restaurant;
  const record = createRestaurant(restaurant);
  res.status(201).json(record);
}

function handleEditRestaurant(req, res) {
  const { id } = req.params;
  const contact = req.body;
  const record = editRestaurant(id, contact);
  if (Object.keys(record).length === 0) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  return res.status(202).json(record);
}

function handleDeleteRestaurant(req, res) {
  const { id } = req.params;
  deleteRestaurant(id);
  return res.status(204).json({ message: 'Contact Deleted' });
}

module.exports = {
  handleGetAllRestaurants,
  handleGetByIdRestaurant,
  handleCreateRestaurant,
  handleEditRestaurant,
  handleDeleteRestaurant,
};
