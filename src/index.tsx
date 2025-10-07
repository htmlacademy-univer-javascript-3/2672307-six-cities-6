import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/MainPage';
import { IApp } from '../components/MainPage';

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
};

root.render(
  <React.StrictMode>
    <App {...DataForApp} />
  </React.StrictMode>
);
