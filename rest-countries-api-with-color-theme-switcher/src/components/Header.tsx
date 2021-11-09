import * as React from "react";
import "../styles/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/actions/toggleThemeActions";
import { IRootState } from "../redux/reducers/rootReducer";

const Header: React.FunctionComponent = () => {
  const toggle = useSelector<IRootState>(
    (state) => state.toggleTheme.toggleTheme
  );
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h3>Where in the world?</h3>
      <div className="theme-switcher" onClick={() => dispatch(toggleTheme())}>
        {toggle ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="far fa-moon"></i>
        )}
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
