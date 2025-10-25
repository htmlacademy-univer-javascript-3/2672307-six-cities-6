//import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MouseEvent } from 'react';
import { OfferType } from "../src/mocks/offers";

type PlaceCardProps = {
  offerType: OfferType,
  onListItemHover: (name: string) => void
}

export function PlaceCard(props: PlaceCardProps) {

  const { offerType, onListItemHover } = props;

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(offerType.name);
  };

  return (
    <article onMouseEnter={handleListItemHover} className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        {/* <a href="#">
          <img
            className="place-card__image"
            src="img/room.jpg"
            width={260}
            height={200}
            alt="Place image"
          />
        </a> */}
        <Link to="/offer">
          <img
            className="place-card__image"
            src="img/room.jpg"
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offerType.price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: "80%" }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Wood and stone place</a>
        </h2>
        <p className="place-card__type">Room</p>
      </div>
    </article>
  )
}
