import * as React from "react";
import "../styles/Header.scss";
import { useSelector } from "react-redux";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHeaderProps {}
interface theme {
  toggleTheme: boolean;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const toggle = useSelector<theme>((state) => state.toggleTheme);
  console.log(toggle);

  return (
    <div className="header">
      <h3>Where in the world?</h3>
      <div className="theme-switcher">
        <i className="far fa-moon"></i>
        {/* <i className="fas fa-moon"></i> */}
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
