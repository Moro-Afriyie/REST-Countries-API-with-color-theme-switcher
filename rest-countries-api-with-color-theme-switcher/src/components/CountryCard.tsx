import * as React from "react";
import "../styles/CountryCard.scss";
import { Link } from "react-router-dom";

interface ICountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: { png: string };
}

const CountryCard: React.FunctionComponent<ICountryCardProps> = ({
  name,
  population,
  region,
  capital,
  flag,
}: ICountryCardProps) => {
  return (
    <Link to="/country">
      <div className="card-container">
        <div className="card__image">
          <img src={flag.png} alt="country flag" />
        </div>
        <div className="card__info">
          <h5>{name}</h5>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
