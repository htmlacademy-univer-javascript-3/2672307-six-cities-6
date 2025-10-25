export type OfferType = {
  id: number;
  price: number;
  rating: number;
  name: string;
  type: string;
}

export const offers: OfferType[] = [
  {
    id: 1,
    price: 80,
    rating: 4,
    name: 'Wood and stone place',
    type: 'Room'
  },
  {
    id: 2,
    price: 180,
    rating: 5,
    name: 'House in a forest',
    type: 'House'
  },
  {
    id: 3,
    price: 200,
    rating: 4,
    name: 'Sights from the heart of the city',
    type: 'Apartments'
  },
  {
    id: 4,
    price: 100,
    rating: 4,
    name: 'Quiet place with TV',
    type: 'Room'
  },
];
