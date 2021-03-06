import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesInterface } from "../interfaces/interface";
import { fetchCountriesData } from "../redux/actions/countryActions";
import { IRootState } from "../redux/reducers/rootReducer";
import "../styles/Home.scss";
import CountryCard from "./CountryCard";
import Search from "./Search";
import errorPage from "../assets/errorPage.svg";
import FadeLoader from "react-spinners/FadeLoader";

const Home: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: IRootState) => state.countries.countries
  );
  const loading = useSelector((state: IRootState) => state.countries.loading);
  const error = useSelector((state: IRootState) => state.countries.error);
  const toggle = useSelector(
    (state: IRootState) => state.toggleTheme.toggleTheme
  );

  React.useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <div className="home">
      <Search />
      <div className="home__cards__container">
        {loading ? (
          <div className="loader">
            <FadeLoader color={toggle ? "#ffffff" : "#000000"} />
          </div>
        ) : error ? (
          <div className="error">
            <h1>Not found</h1>
            <img src={errorPage} alt="error page" />
          </div>
        ) : (
          countries.map((country: countriesInterface) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default Home;
