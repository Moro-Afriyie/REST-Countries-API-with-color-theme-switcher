import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesInterface } from "../interfaces/interface";
import { fetchCountriesData } from "../redux/actions/countryActions";
import { IRootState } from "../redux/reducers/rootReducer";
import "../styles/Home.scss";
import CountryCard from "./CountryCard";
import Search from "./Search";

const Home: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: IRootState) => state.countries.countries
  );

  React.useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  //{loading ? "Loading..." : error ? error.message : users.map(u => <h3>{u.name}</h3>)}

  return (
    <div className="home">
      <Search />
      <div className="home__cards__container">
        {countries.map((country: countriesInterface) => {
          return (
            <CountryCard
              name={country.name}
              key={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
