import React from 'react';
import { render } from 'react-dom';

import App from './App';
import getRestaurants from './restaurants';

getRestaurants().then(
    restaurants => {
      return render(<App restaurants={restaurants} />, document.querySelector('#root'));
    }
)
.catch( err => {
  if(err) {
    console.log( "deu ruim: "+ err);
  }
})