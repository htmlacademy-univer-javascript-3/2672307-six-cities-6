//import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../components/MainPage';
import { IApp } from '../components/MainPage';
import Favorites from '../components/Favorites';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Offer from '../components/Offer';
import Layout from '../components/Layout';
import GoAway from '../components/GoAway';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

import {offers} from './mocks/offers';
//import {OfferType} from './mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mail: string = 'email@mail.com';
const cartQuantity: number = 2;
const city: string = 'Amsterdam';
const numberOfOffers: number = 5;

// let CardsInfo: ICard[];

export const DataForApp: IApp = {
  mail: mail,
  cartQuantity: cartQuantity,
  city: city,
  numberOfOffers: numberOfOffers,
  offers: offers,
};

root.render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout/>}>
        <Route index element={<App {...DataForApp} />}/>
        <Route path='login' element={<Login />} />
        <Route path='offer/:id' element={<Offer />} />

        <Route path='favorites' element={
          <PrivateRoute>
            <Favorites offers={offers} />
          </PrivateRoute>
        }
        />
      </Route>

      <Route path='*' element={<NotFound />} />
      <Route path='go-away' element={<GoAway />} />
    </Routes>
  </BrowserRouter>
);
