import React from 'react';
import { renderToString } from 'react-dom/server';
import * as functions from 'firebase-functions';
import express from 'express';
import fs from 'fs';

import App from './src/App';
import getRestaurants from './src/restaurants';

const app = express();

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('**', (req, res)=> {
  const restaurants = [{ _id: 1, name: "Test" }, { _id: 2, name: "Test2" }, { _id: 3, name: "Test3" }];
  const html = renderToString(<App restaurants={restaurants} />);
  const replacedHtml = index.replace('<!-- ::APP:: -->', html);
  res.set('Cache-Control', 'public, max-age=600, s-maxage = 1200');
  console.log(html);
  res.send(replacedHtml);
})

export const ssrApp = functions.https.onRequest(app);