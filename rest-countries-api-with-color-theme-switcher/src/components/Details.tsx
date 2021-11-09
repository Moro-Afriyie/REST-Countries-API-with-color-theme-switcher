import * as React from "react";
import "../styles/Details.scss";
import { Link, useParams } from "react-router-dom";
import { getCountryData } from "../redux/actions/countryActions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/reducers/rootReducer";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDetailsProps {}

const Details: React.FunctionComponent<IDetailsProps> = (props) => {
  const params = useParams<{ country: string }>();
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: IRootState) => state.countries.countries
  );

  // React.useEffect(()=>{
  //   dispatch(getCountryData(params.country))
  // },[]);
  const country = countries.filter(
    (country) => country.name === params.country
  )[0];
  console.log("country : ", country);
  return (
    <div className="details">
      <Link to="/">
        <div className="btn__back">
          <i className="fas fa-arrow-left"></i>
          <p>Back</p>
        </div>
      </Link>
      <div className="details__container">
        <div className="country__flag">
          <img src={country.flags.png} alt="country flag" />
        </div>
        <div className="country__details">
          <h2 className="country__name">{country.name}</h2>
          <div className="country__info">
            <div className="country__info__left">
              <p>
                Native Name: <span>{country.nativeName}</span>
              </p>
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subRegion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div className="country__info__right">
              <p>
                Top Level Domain: <span>{country.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{country.currencies.name}</span>
              </p>
              <p>
                Languages:{" "}
                {country.languages.map((language) => {
                  return <span key={language.name}>{language.name}, </span>;
                })}
              </p>
            </div>
          </div>
          <div className="country__info__bottom">
            <p>Border Countries:</p>
            <div className="border__countries">
              <div className="country">France</div>
              <div className="country">Germany</div>
              <div className="country">Netherlands</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
