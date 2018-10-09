import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import fs from 'fs';

import App from './src/App';
import getRestaurants from './src/restaurants';

const app = express();

const index = fs.readFileSync(__dirname + '/public/index.html', 'utf8');

app.get('**', (req, res) => {
  getRestaurants()
    .then(restaurants => {
      const html = renderToString(<App restaurants={restaurants} />);
      const replacedHtml = index.replace('<!-- ::APP:: -->', html);
      res.send(replacedHtml);
    })
    .catch(err => {
      if(err) {
        console.error(err);
      }
      console.log('deu ruim');
    })
})

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Node running on port ' + port);
})
