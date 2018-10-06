import fetch from 'isomorphic-fetch';

const getRestaurants = async () => {
  const res = await fetch('http://localhost:3000/api/restaurants')
  return res.json();
}

export default getRestaurants;