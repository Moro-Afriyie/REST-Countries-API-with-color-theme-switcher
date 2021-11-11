import { countriesInterface } from "../../interfaces/interface";
import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_BEGIN,
} from "../types/countryTypes";

interface countryInterface {
  countries: countriesInterface[];
  loading: boolean;
  error: boolean;
}
const initialState = {
  countries: [],
  loading: false,
  error: false,
};

type Action =
  | { type: typeof FETCH_COUNTRIES_BEGIN }
  | { type: typeof FETCH_COUNTRIES_SUCCESS; payload: countriesInterface[] }
  | { type: typeof FETCH_COUNTRIES_ERROR };

export const countriesReducer = (
  state: countryInterface = initialState,
  action: Action
): countryInterface => {
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };

    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        countries: [],
      };

    default:
      return state;
  }
};
