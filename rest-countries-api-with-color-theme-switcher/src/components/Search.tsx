import * as React from "react";
import { useDispatch } from "react-redux";
import {
  filterCountriesData,
  SeacrhCountry,
} from "../redux/actions/countryActions";
import "../styles/Search.scss";

const Search: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const onFilterCountries = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterCountriesData(e.target.value));
  };

  const onSearchForCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SeacrhCountry(e.target.value));
  };

  return (
    <div className="search__container">
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          placeholder="Search for a country..."
          type="search"
          name="search"
          onChange={onSearchForCountry}
        />
      </div>
      <div className="filter">
        {/* <select onChange={selectCountry}> */}
        <select className="mySelect" onChange={onFilterCountries}>
          <option value="default">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
