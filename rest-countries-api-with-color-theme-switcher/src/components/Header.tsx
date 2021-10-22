import * as React from "react";
import "../styles/Header.scss";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return <h1>Header</h1>;
};

export default Header;
