import * as React from "react";
import "../styles/Details.scss";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDetailsProps {}

const Details: React.FunctionComponent<IDetailsProps> = (props) => {
  return (
    <div className="details">
      <div className="btn__back">
        <i className="fas fa-arrow-left"></i>
        <p>Back</p>
      </div>
      <div className="details__container">
        <div className="country__flag">
          <img
            src="https://th.bing.com/th/id/OIP.C2PWHH_hnxIYTCyyAOjIUwHaEo?w=290&h=181&c=7&r=0&o=5&pid=1.7"
            alt="country flag"
          />
        </div>
        <div className="country__details">
          <h2 className="country__name">Germany</h2>
          <div className="country__info">
            <div className="country__info__left">
              <p>
                Native Name: <span>88,770,900</span>
              </p>
              <p>
                Population: <span>88,770,900</span>
              </p>
              <p>
                Region: <span>Europe</span>
              </p>
              <p>
                Sub Region: <span>Berlin</span>
              </p>
              <p>
                Capital: <span>Berlin</span>
              </p>
            </div>
            <div className="country__info__right">
              <p>
                Top Level Domain: <span>88,770,900</span>
              </p>
              <p>
                Currencies: <span>Europe</span>
              </p>
              <p>
                Languages: <span>Berlin</span>
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
