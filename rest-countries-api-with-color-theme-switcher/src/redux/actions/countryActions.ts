import axios from "axios";
import { Dispatch } from "redux";

import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_BEGIN,
} from "../types/countryTypes";
const url = "https://restcountries.com/v2/all";

export const fetchCountriesBegin = () => {
  return {
    type: FETCH_COUNTRIES_BEGIN,
  };
};

export const fetchCountriesSuccess = (data: any[]) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: data,
  };
};

export const fetchCountriesError = (error: any) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    error: error,
  };
};

// export const fetchCountriesData = () => {
//   async (dispatch: Dispatch) => {
//     try {
//       dispatch(fetchCountriesBegin());
//       const response: any = await axios.get("https://restcountries.com/v2/all");
//       const countries: any[] = await response.json();
//       //   console.log("countries: ", countries);
//       dispatch(fetchCountriesSuccess(countries));
//       //   return countries;
//       console.log(response);
//     } catch (error) {
//       dispatch(fetchCountriesError(error));
//     }
//   };
// };

export function fetchCountriesData() {
  return (dispatch: Dispatch) => {
    dispatch(fetchCountriesBegin());
    return (
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchCountriesSuccess(data));
          return data;
        })
        //   .then(handleErrors)
        .catch((error) => dispatch(fetchCountriesError(error)))
    );
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: { ok: any; statusText: string | undefined }) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
