import * as React from "react";
import "../styles/Details.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/reducers/rootReducer";
import { getCountryData } from "../redux/actions/countryDetailsActions";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDetailsProps {}

const Details: React.FunctionComponent<IDetailsProps> = (props) => {
  const params = useParams<{ country: string }>();
  const dispatch = useDispatch();
  const country = useSelector((state: IRootState) => state.setCountry.country);

  React.useEffect(() => {
    console.log(dispatch(getCountryData(params.country.toLowerCase())));
  }, [params.country]);

  return (
    <div className="details">
      <Link to="/">
        <div className="btn__back">
          <i className="fas fa-arrow-left"></i>
          <p>Back</p>
        </div>
      </Link>
      {country.length > 0 && (
        <div className="details__container">
          <div className="country__flag">
            <img src={country[0].flags.png} alt="country flag" />
          </div>
          <div className="country__details">
            <h2 className="country__name">{country[0].name}</h2>
            <div className="country__info">
              <div className="country__info__left">
                <p>
                  Native Name: <span>{country[0].nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span>{country[0].population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{country[0].region}</span>
                </p>
                <p>
                  Sub Region: <span>{country[0].subRegion}</span>
                </p>
                <p>
                  Capital: <span>{country[0].capital}</span>
                </p>
              </div>
              <div className="country__info__right">
                <p>
                  Top Level Domain: <span>{country[0].topLevelDomain}</span>
                </p>
                <p>
                  Currencies: <span>{country[0].currencies.name}</span>
                </p>
                <p>
                  Languages:{" "}
                  {country[0].languages.map((language) => {
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
      )}
    </div>
  );
};

export default Details;
