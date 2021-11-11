import { combineReducers } from "redux";
import { toggleThemeReducer } from "./toggleThemeReducer";
import { countriesReducer } from "./countryReducer";

export const rootReducer = combineReducers({
  toggleTheme: toggleThemeReducer,
  countries: countriesReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
