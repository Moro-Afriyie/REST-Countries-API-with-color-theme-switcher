import * as React from "react";
import "../styles/Details.scss";
import { Link, useParams } from "react-router-dom";
import { countriesInterface } from "../interfaces/interface";
import { countryCode } from "../interfaces/countryCodes";
import axios from "axios";

const Details: React.FunctionComponent = () => {
  const params = useParams<{ country: string }>();
  const [country, setCountry] = React.useState<countriesInterface[]>([]);

  React.useEffect(() => {
    const fectchCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v2/name/${params.country.toLowerCase()}`
        );
        setCountry(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fectchCountry();
  }, [params.country]);

  const getBorders = (country: countriesInterface) => {
    // let countryIndexed = indexCodes();
    if (country.borders === undefined) {
      return [];
    }
    const op = country.borders.map((e) => {
      //border = countryIndexed[e];
      const border = countryCode.find((element) => {
        if (element.alpha2Code === e || element.alpha3Code === e) {
          return element;
        }
      });
      return border;
    });
    return op;
  };

  // const indexCodes = (country: any) => {
  //   const countryIndexed = {};
  //   country.forEach((element) => {
  //     countryIndexed[element.alpha2Code]= element;
  //     countryIndexed[element.alpha3Code]= element;
  //   });

  // return countryIndexed;
  // };

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
                  Currencies:{" "}
                  <span>
                    {country[0].currencies ? country[0].currencies[0].name : ""}
                  </span>
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
                {getBorders(country[0]).map((border, index) => {
                  return (
                    <div className="country" key={index}>
                      {border?.englishShortName}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
