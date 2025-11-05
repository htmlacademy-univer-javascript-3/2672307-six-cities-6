import { createReducer } from '@reduxjs/toolkit';
import { changeOffer, reloadOffersList } from './action';
//import { FIRST_GAME_STEP } from '../const';

const offersNames: string[] = [
  'Wood and stone place',
  'House in a forest',
  'Sights from the heart of the city',
  'Quiet place with TV'
]

const initialState = {
  cityName: 'Wood and stone place',
  currentOffersList: offersNames,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeOffer, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(reloadOffersList, (state, action) => {
      state.currentOffersList.push(action.payload);
    });
});

export { reducer };
