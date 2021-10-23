import * as React from "react";
import "../styles/Home.scss";
import CountryCard from "./CountryCard";
import Search from "./Search";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="home">
      <Search />
      <div className="home__cards__container">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((country) => {
          return <CountryCard key={country} />;
        })}
      </div>
    </div>
  );
};

export default Home;
