import { MouseEvent } from 'react';
import { OfferType } from "../src/mocks/offers"
import { PlaceCard } from "./PlaceCard"
import { Points } from '../src/types/types';


export type OffersListProps = {
  offers: OfferType[],
  points: Points;
  onListItemHover: (listItemName: string) => void;
}

export function OffersList(props: OffersListProps) {
  //const [numberOfActiveElements, setActiveElement] = useState(0);

  const { points, onListItemHover } = props;

  const handleListItemHover = (name: string) => {
    onListItemHover(name);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard onListItemHover={handleListItemHover} offerType={props.offers[0]} />
      <PlaceCard onListItemHover={handleListItemHover} offerType={props.offers[1]} />
      <PlaceCard onListItemHover={handleListItemHover} offerType={props.offers[2]} />
      <PlaceCard onListItemHover={handleListItemHover} offerType={props.offers[3]} />
    </div>
  )
}
