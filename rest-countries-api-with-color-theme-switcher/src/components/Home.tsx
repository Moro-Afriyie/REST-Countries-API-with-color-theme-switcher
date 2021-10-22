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
      <CountryCard />
    </div>
  );
};

export default Home;
