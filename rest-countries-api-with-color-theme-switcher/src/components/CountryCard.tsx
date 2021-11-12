import * as React from "react";
import "../styles/CountryCard.scss";
import { Link } from "react-router-dom";

interface ICountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: { svg: string };
}

const CountryCard: React.FunctionComponent<ICountryCardProps> = ({
  name,
  population,
  region,
  capital,
  flag,
}: ICountryCardProps) => {
  return (
    <Link to={`/${name}`}>
      <div className="card-container ">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${flag.svg})` }}
        ></div>
        <div className="card__info">
          <h5>{name}</h5>
          <p>
            Population: <span>{population.toLocaleString()}</span>
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
