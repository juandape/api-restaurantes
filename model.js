const table = require('@makeitrealcamp/db-mock');
const r1 = table.insert({
  name: 'Mexican Sabor',
  schedules: '10:00 - 22:00',
  category: 'Mexican',
  foodtype: 'Lunch',
  address: 'Cra. 34b #134-75',
  rating: "4.5",
  logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fmexican-food-restaurant-with-various-delicious-traditional-cuisine-flat-illustration_33726646.htm&psig=AOvVaw1kEvliuxCtDcoWxH_vfyjT&ust=1684289178189000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj2maXg-P4CFQAAAAAdAAAAABAE',
  foods: [
    {
      name: 'Enchiladas',
      price: '17000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkeviniscooking.com%2Fsmoked-pork-cheese-enchiladas-red-sauce%2F&psig=AOvVaw2sxBmsPN7Ogoke-DZPwKid&ust=1684289293535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJiJ2dzg-P4CFQAAAAAdAAAAABAE',
      rate: '4.0',
    },
    {
      name: 'Tacos',
      price: '15000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffunwithoutfodmaps.com%2Flow-fodmap-beef-tacos%2F&psig=AOvVaw2gnmtCz3MtN71hLOVFNuJA&ust=1684289440389000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJj9h6Lh-P4CFQAAAAAdAAAAABAE',
      rate: '4.7',
    },
    {
      name: 'Elotes',
      price: '7500',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recepedia.com%2Fes-mx%2Freceta%2Fvegetales%2F214063-elote-preparado-con-mayonesa%2F&psig=AOvVaw0sHB7lIfmk_vSBZmmtEH3I&ust=1684289614375000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJiVgfXh-P4CFQAAAAAdAAAAABAE',
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
  rating: "4.8",
  logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsp.depositphotos.com%2Fvector-images%2Fcreative-big-burger-logo.html&psig=AOvVaw0h-etmdsrwA53_3JmTURTj&ust=1684289775912000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDr_8Hi-P4CFQAAAAAdAAAAABAJ',
  foods: [
    {
      name: 'Big Burguer',
      price: '22000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fes%2Fs%2Ffotos%2Fbig-burger&psig=AOvVaw1EBrGV1gXGNW83e3OW664W&ust=1684289883885000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCq5vXi-P4CFQAAAAAdAAAAABAE',
      rate: '4.5',
    },
    {
      name: 'Royal Burguer',
      price: '32000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laopinion.com.co%2Feconomia%2Fregreso-la-burger-master-cucuta-con-hamburguesas-artesanales&psig=AOvVaw3wQhjyTwruQUNK9N0P8Sa-&ust=1684289999356000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCX1Kzj-P4CFQAAAAAdAAAAABAE',
      rate: '4.7',
    },
    {
      name: 'Darker Burguer',
      price: '35000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.circuitogastronomico.com%2Fplan-para-el-finde-preparar-unas-black-pan-en-tu-casa%2F&psig=AOvVaw2PZvGSohSw5qrcomxH70dM&ust=1684290100405000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjV3tzj-P4CFQAAAAAdAAAAABAE',
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
  rating: "4.5",
  logo: '',
  foods: [
    {
      name: 'Naruto Sushi Rolls',
      price: '22000',
      amount: '12',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lowcarb-nocarb.com%2Fnaruto-rolls%2F&psig=AOvVaw38nI6ByPi6pFHNoJUmQhXN&ust=1684290434284000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjk8Pvk-P4CFQAAAAAdAAAAABAE',
      rate: '4.2',
    },
    {
      name: 'Naruti Sushi Lounge',
      price: '32000',
      amount: '15',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co%2FRestaurant_Review-g294480-d12241490-Reviews-Naruto_Sushi_Lounge-Panama_City_Panama_Province.html&psig=AOvVaw38nI6ByPi6pFHNoJUmQhXN&ust=1684290434284000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjk8Pvk-P4CFQAAAAAdAAAAABAJ',
      rate: '5.0',
    },
    {
      name: 'Sasuke Ramen',
      price: '25000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g186338-d6580474-Reviews-Sasuke_Ramen-London_England.html&psig=AOvVaw37uE0WhRgaXwKhscbD9pJ9&ust=1684290868219000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjtkMvm-P4CFQAAAAAdAAAAABAE',
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
  rating: "4.5",
  logo: '',
  foods: [
    {
      name: 'Eggs and Bacon',
      price: '15000',
      amount: '15',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lowcarb-nocarb.com%2Fnaruto-rolls%2F&psig=AOvVaw38nI6ByPi6pFHNoJUmQhXN&ust=1684290434284000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjk8Pvk-P4CFQAAAAAdAAAAABAE',
      rate: '4.4',
    },
    {
      name: 'Continental Breakfast',
      price: '20000',
      amount: '15',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co%2FRestaurant_Review-g294480-d12241490-Reviews-Naruto_Sushi_Lounge-Panama_City_Panama_Province.html&psig=AOvVaw38nI6ByPi6pFHNoJUmQhXN&ust=1684290434284000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjk8Pvk-P4CFQAAAAAdAAAAABAJ',
      rate: '4.2',
    },
    {
      name: 'Coffee and Toast',
      price: '15000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g186338-d6580474-Reviews-Sasuke_Ramen-London_England.html&psig=AOvVaw37uE0WhRgaXwKhscbD9pJ9&ust=1684290868219000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjtkMvm-P4CFQAAAAAdAAAAABAE',
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
  rating: "4.7",
  logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fitalian-restaurant-logo&psig=AOvVaw2UPb4unsCBfRiH9tCYznTQ&ust=1684291093246000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLj4obXn-P4CFQAAAAAdAAAAABAE',
  foods: [
    {
      name: 'Monza Pizza',
      price: '25500',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co%2FRestaurant_Review-g635872-d20222455-Reviews-Nietta_Pizzeria_Friggitoria-Monza_Province_of_Monza_and_Brianza_Lombardy.html&psig=AOvVaw2MpQ1up_9AMmcKBhoGm20W&ust=1684291151088000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiI_9Hn-P4CFQAAAAAdAAAAABAE',
      rate: '3.8',
    },
    {
      name: 'Ferrari Pasta',
      price: '45000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.spiegel.de%2Fstil%2Frezept-fuer-pasta-ferrari-a-e416f0f9-7f3d-4867-b057-236519251267&psig=AOvVaw39kpZCHY09eslrWa7bynf6&ust=1684291277176000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCv_I3o-P4CFQAAAAAdAAAAABAE',
      rate: '4.0',
    },
    {
      name: 'Enzo Automovile lasagna',
      price: '45000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcocina-casera.com%2F8-platos-tipicos-la-comida-italiana%2F&psig=AOvVaw1UmkmSqbHQ9RqqLaGGcAMb&ust=1684291322770000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDM76Po-P4CFQAAAAAdAAAAABAE',
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
  rating: "4.1",
  logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreebiesupply.com%2Flogos%2Fmichael-schumacher-logo%2F&psig=AOvVaw1Y_wb7i1jibeHU3H65TETe&ust=1684291609631000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJi1tqzp-P4CFQAAAAAdAAAAABAE',
  foods: [
    {
      name: 'schnelle Würstchen',
      price: '7500',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fastelus.com%2Fcomida-tipica-de-alemania-salchichas%2F&psig=AOvVaw1DjbPQLuLp_96GAkU4rZNW&ust=1684292079475000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiq9Y3r-P4CFQAAAAAdAAAAABAE',
      rate: '5.0',
    },
    {
      name: 'Red ferrari Grutze',
      price: '37000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.edunclub.ru%2Frecipe%2F146166-german-dessert-of-berries-the-company-grutze%2F&psig=AOvVaw0hsIV_-9TT6sD3mKZL1MsG&ust=1684292222117000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDfy9Hr-P4CFQAAAAAdAAAAABAJ',
      rate: '4.9',
    },
    {
      name: 'Currywurst',
      price: '18000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCurrywurst&psig=AOvVaw15MCN7jc_bxqqPgUyMjvlJ&ust=1684292414114000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDx3azs-P4CFQAAAAAdAAAAABAE',
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
  rating: "4.1",
  logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreebiesupply.com%2Flogos%2Fmichael-schumacher-logo%2F&psig=AOvVaw1Y_wb7i1jibeHU3H65TETe&ust=1684291609631000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJi1tqzp-P4CFQAAAAAdAAAAABAE',
  foods: [
    {
      name: 'cacerola de huevo',
      price: '1500',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fastelus.com%2Fcomida-tipica-de-alemania-salchichas%2F&psig=AOvVaw1DjbPQLuLp_96GAkU4rZNW&ust=1684292079475000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiq9Y3r-P4CFQAAAAAdAAAAABAE',
      rate: '5.0',
    },
    {
      name: 'buñuelos y empanadas',
      price: '1000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.edunclub.ru%2Frecipe%2F146166-german-dessert-of-berries-the-company-grutze%2F&psig=AOvVaw0hsIV_-9TT6sD3mKZL1MsG&ust=1684292222117000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDfy9Hr-P4CFQAAAAAdAAAAABAJ',
      rate: '4.9',
    },
    {
      name: 'Arepa de huevo',
      price: '12000',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCurrywurst&psig=AOvVaw15MCN7jc_bxqqPgUyMjvlJ&ust=1684292414114000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDx3azs-P4CFQAAAAAdAAAAABAE',
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
