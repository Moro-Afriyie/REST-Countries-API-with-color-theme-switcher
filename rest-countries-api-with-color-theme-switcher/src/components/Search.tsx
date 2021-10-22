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
        <input placeholder="" type="text" />
      </div>
    </div>
  );
};

export default Search;
