import * as React from "react";
import "../styles/Details.scss";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDetailsProps {}

const Details: React.FunctionComponent<IDetailsProps> = (props) => {
  return (
    <div className="details">
      <div className="btn__back"></div>
      <div className="details__container"></div>
    </div>
  );
};

export default Details;
