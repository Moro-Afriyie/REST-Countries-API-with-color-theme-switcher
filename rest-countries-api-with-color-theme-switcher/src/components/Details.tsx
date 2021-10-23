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
      <div className="details__container"></div>
    </div>
  );
};

export default Details;
