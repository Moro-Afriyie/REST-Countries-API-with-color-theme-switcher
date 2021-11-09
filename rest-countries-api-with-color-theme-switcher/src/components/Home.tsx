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
  // const data = useSelector<IRootState>((state) = > state.countriesReducer.countries)
  const dispatch = useDispatch();

  React.useEffect(() => {
    // fetch("https://restcountries.com/v2/all")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((error) => console.log(error));
    // const fetchData = async () => {
    //   const data = await dispatch(fetchCountriesData());
    //   console.log(data);
    // };
    // fetchData();
    console.log(dispatch(fetchCountriesData()));
  }, []);

  // console.log(data)

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
