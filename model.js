const table = require('@makeitrealcamp/db-mock');
const r1 = table.insert({
  name: 'Mexican Sabor',
  schedules: '10:00 - 22:00',
  category: 'Mexican',
  foodtype: 'Lunch',
  address: 'Cra. 34b #134-75',
  rating: '4.5',
  logo: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/Mexican_sabor_logo_snjt7e.png',
  food: [
    {
      id: 1,
      name: 'Enchiladas',
      price: '17000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/1.1_wy8fyy.jpg',
      rate: '4.0',
    },
    {
      id: 2,
      name: 'Tacos',
      price: '15000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/1.2_kcjaak.jpg',
      rate: '4.7',
    },
    {
      id: 3,
      name: 'Elotes',
      price: '7500',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086361/clod_restaurants/1.3_segpuw.png',
      rate: '4.8',
    },
  ],
});
const r2 = table.insert({
  name: 'Gratini Burguers',
  schedules: '15:00 - 23:00',
  category: 'Fast Food',
  foodtype: 'Fast Food',
  address: 'Calle 21 #56-42',
  rating: '4.8',
  logo: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/gratini_burguer_b5svdp.webp"',
  food: [
    {
      id: 1,
      name: 'Big Burguer',
      price: '22000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137238/clod_restaurants/2.1_uc4c9e.png',
      rate: '4.5',
    },
    {
      id: 2,
      name: 'Royal Burguer',
      price: '32000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/2.2_cz4sqz.jpg',
      rate: '4.7',
    },
    {
      id: 3,
      name: 'Darker Burguer',
      price: '35000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/2.3_hasntx.jpg',
      rate: '5.0',
    },
  ],
});
const r3 = table.insert({
  name: 'NARUTO Sushi Bar',
  schedules: '12:00 - 20:00',
  category: 'Asian',
  foodtype: 'Lunch',
  address: 'Cra. 43 #32-21',
  rating: '4.5',
  logo: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/naruto_logo_swgkbo.png',
  food: [
    {
      id: 1,
      name: 'Naruto Sushi Rolls',
      price: '22000',
      amount: '12',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137137/clod_restaurants/3.1_kgcrb3.png',
      rate: '4.2',
    },
    {
      id: 2,
      name: 'Naruti Sushi Lounge',
      price: '32000',
      amount: '15',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/3.2_arnbxz.jpg',
      rate: '5.0',
    },
    {
      id: 3,
      name: 'Sasuke Ramen',
      price: '25000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/3.3_wwjqjw.jpg',
      rate: '4.7',
    },
  ],
});
const r4 = table.insert({
  name: 'My Dumpling',
  schedules: '8:00 - 13:00',
  category: 'Bakeries',
  foodtype: 'Breakfast',
  address: 'Cra. 1 #12-35',
  rating: '4.5',
  logo: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137425/clod_restaurants/dumpling_logo_vzpkcb.png',
  food: [
    {
      id: 1,
      name: 'Eggs and Bacon',
      price: '15000',
      amount: '15',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/4.1_d6jkrh.jpg',
      rate: '4.4',
    },
    {
      id: 2,
      name: 'Continental Breakfast',
      price: '20000',
      amount: '15',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086357/clod_restaurants/4.2_lpzspr.jpg',
      rate: '4.2',
    },
    {
      id: 3,
      name: 'Coffee and Toast',
      price: '15000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/4.3_uxliiv.jpg',
      rate: '4.5',
    },
  ],
});
const r5 = table.insert({
  name: 'Pizza Royalty',
  schedules: '10:00 - 22:00',
  category: 'Italian',
  foodtype: 'Dinner',
  address: 'Calle 53b #14-23',
  rating: '4.7',
  logo: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137302/clod_restaurants/pizza_logo_dqneft.png',
  food: [
    {
      id: 1,
      name: 'Monza Pizza',
      price: '25500',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/5.1_anltqb.jpg',
      rate: '3.8',
    },
    {
      id: 2,
      name: 'Ferrari Pasta',
      price: '45000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137375/clod_restaurants/5.2_skglt7.jpg',
      rate: '4.0',
    },
    {
      id: 3,
      name: 'Enzo Automovile lasagna',
      price: '45000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/5.3_msxslw.jpg',
      rate: '4.8',
    },
  ],
});
const r6 = table.insert({
  name: 'Schumacher food',
  schedules: '11:00 - 19:00',
  category: 'German',
  foodtype: 'Dinner',
  address: 'Calle 2 #2b-64',
  rating: '4.1',
  logo: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/schu_logo_ajotaz.png',
  food: [
    {
      id: 1,
      name: 'schnelle Würstchen',
      price: '7500',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/6.1_kllrpz.jpg',
      rate: '5.0',
    },
    {
      id: 2,
      name: 'Red ferrari Grutze',
      price: '37000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/6.2_oxhcyp.jpg',
      rate: '4.9',
    },
    {
      id: 3,
      name: 'Currywurst',
      price: '18000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/6.3_zh117v.jpg',
      rate: '4.2',
    },
  ],
});
const r7 = table.insert({
  name: 'Mi Buñuelo',
  schedules: '6:00 - 19:00',
  category: 'Bakeries',
  foodtype: 'Breakfast',
  address: 'Calle 1 #10-22',
  rating: '4.1',
  logo: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086357/clod_restaurants/bu%C3%B1_logo_t1kbzy.jpg',
  food: [
    {
      id: 1,
      name: 'cacerola de huevo',
      price: '1500',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/7.1_rzwxzz.jpg',
      rate: '5.0',
    },
    {
      id: 2,
      name: 'buñuelos y empanadas',
      price: '1000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/7.2_mgtlhm.jpg',
      rate: '4.9',
    },
    {
      id: 3,
      name: 'Arepa de huevo',
      price: '12000',
      image:
        'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086357/clod_restaurants/7.3_xzkglp.jpg',
      rate: '4.5',
    },
  ],
});

function getAllRestaurants() {
  const records = table.findAll();
  return records;
}

function getRestaurantsById(id) {
  const record = table.findById(id);
  return record;
}

function createRestaurant(contact) {
  const record = table.insert(contact);
  return record;
}

function editRestaurant(id, contact) {
  const contactEdit = {
    id,
    ...contact,
  };
  const record = table.update(contactEdit);
  return record;
}

function deleteRestaurant(id) {
  const record = table.remove(id);
  return record;
}

module.exports = {
  getAllRestaurants,
  getRestaurantsById,
  createRestaurant,
  editRestaurant,
  deleteRestaurant,
};
