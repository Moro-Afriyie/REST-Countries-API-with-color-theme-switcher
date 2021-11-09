import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesData } from "../redux/actions/countryActions";
import { IRootState } from "../redux/reducers/rootReducer";
import "../styles/Home.scss";
import CountryCard from "./CountryCard";
import Search from "./Search";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHomeProps {}
interface countryInterface {
  countries: any[];
  loading: boolean;
  error: string | null;
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const dispatch = useDispatch();
  const countries = useSelector<IRootState>(
    (state) => state.countries.countries
  );
  console.log(countries);

  React.useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  //{loading ? "Loading..." : error ? error.message : users.map(u => <h3>{u.name}</h3>)}

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
