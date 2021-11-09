import { combineReducers } from "redux";
import { toggleThemeReducer } from "./toggleThemeReducer";
import { countriesReducer } from "./countryReducer";
import { setCountryReducer } from "./setCountryReducer";

export const rootReducer = combineReducers({
  toggleTheme: toggleThemeReducer,
  countries: countriesReducer,
  setCountry: setCountryReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
