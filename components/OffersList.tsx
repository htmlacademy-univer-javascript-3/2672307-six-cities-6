import {OfferType} from "../src/mocks/offers"
import { PlaceCard } from "./PlaceCard"
import { useState } from "react";

export type IOffersList = {
  offers: OfferType[],
}

export function OffersList(props: IOffersList) {
  const [numberOfActiveElement, setActiveElement] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard {...props.offers[0]} />
      <PlaceCard {...props.offers[1]} />
      <PlaceCard {...props.offers[2]} />
      <PlaceCard {...props.offers[3]} />
    </div>
  )
}
