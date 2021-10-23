import * as React from "react";
import "../styles/CountryCard.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICountryCardProps {}

const CountryCard: React.FunctionComponent<ICountryCardProps> = (props) => {
  return (
    <div className="card-container">
      <div className="card__image">
        <img
          src="https://th.bing.com/th/id/OIP.C2PWHH_hnxIYTCyyAOjIUwHaEo?w=290&h=181&c=7&r=0&o=5&pid=1.7"
          alt="country flag"
        />
      </div>
      <div className="card__info">
        <h5>Germany</h5>
        <p>
          Population: <span>88,770,900</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
