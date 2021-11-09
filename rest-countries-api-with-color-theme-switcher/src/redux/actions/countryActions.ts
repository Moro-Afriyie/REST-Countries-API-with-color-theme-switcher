import axios from "axios";
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

export const fetchCountriesSuccess = (data: any) => {
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
//   return async (dispatch: (arg0: { type: string }) => void) => {
//     dispatch(fetchCountriesBegin());
//     try {
//       const countries = await axios.get(url);
//       console.log(countries);
//       dispatch(fetchCountriesSuccess(countries));
//     } catch (error) {
//       dispatch(fetchCountriesError(error));
//     }
//   };
// };

export function fetchCountriesData() {
  return (
    dispatch: (arg0: { type: string; payload?: any; error?: any }) => void
  ) => {
    dispatch(fetchCountriesBegin());
    return fetch(url)
      .then(handleErrors)
      .then((res) => console.log(res))
      .then((data) => {
        dispatch(fetchCountriesSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchCountriesError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: { ok: any; statusText: string | undefined }) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
