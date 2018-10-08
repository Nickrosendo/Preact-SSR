import fetch from 'isomorphic-fetch';

const getRestaurants = () => {
  return fetch('https://billy-server.herokuapp.com/api/restaurants').then( res => res.json());
}

export default getRestaurants;