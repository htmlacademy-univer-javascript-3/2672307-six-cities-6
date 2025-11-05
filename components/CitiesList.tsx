import { useAppDispatch } from '../src/hooks/dispatch';
import { reloadOffersList } from "../src/store/features/action"


export default function CitiesList() {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" onClick={() => { dispatch(reloadOffersList('Cologne')); }} href="#">
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active" onClick={() => { dispatch(reloadOffersList('Amsterdam')); }}>
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#" onClick={() => { dispatch(reloadOffersList('Hamburg')); }}>
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#" onClick={() => { dispatch(reloadOffersList('Dusseldorf')); }}>
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
