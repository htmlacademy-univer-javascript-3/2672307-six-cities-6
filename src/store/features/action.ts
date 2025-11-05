import { createAction } from '@reduxjs/toolkit';

export const changeOffer = createAction< string >('offers/change');
export const reloadOffersList = createAction<string>('offers/fill');
