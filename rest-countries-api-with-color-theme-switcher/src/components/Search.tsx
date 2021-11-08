import * as React from "react";
import "../styles/Search.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className="search__container">
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          placeholder="Search for a country..."
          type="text"
          name="search"
        />
      </div>
      <div className="filter">
        {/* <select onChange={selectCountry}> */}
        <select className="mySelect">
          <option value="default" disabled>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
