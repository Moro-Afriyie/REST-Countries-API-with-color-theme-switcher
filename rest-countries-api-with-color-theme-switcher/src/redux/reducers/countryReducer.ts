import { countriesInterface } from "../../interfaces/interface";
import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_BEGIN,
} from "../types/countryTypes";

interface countryInterface {
  countries: countriesInterface[];
  loading: boolean;
  error: string | null;
}
const initialState = {
  countries: [],
  loading: false,
  error: null,
};

type Action =
  | { type: typeof FETCH_COUNTRIES_BEGIN }
  | { type: typeof FETCH_COUNTRIES_SUCCESS; payload: countriesInterface[] }
  | { type: typeof FETCH_COUNTRIES_ERROR; payload: string };

export const countriesReducer = (
  state: countryInterface = initialState,
  action: Action
): countryInterface => {
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
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
        error: action.payload,
        countries: [],
      };

    default:
      return state;
  }
};
