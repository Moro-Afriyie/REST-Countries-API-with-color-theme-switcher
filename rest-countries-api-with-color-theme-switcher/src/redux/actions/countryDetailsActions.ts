import { countriesInterface } from "./../../interfaces/interface";
import axios from "axios";
import { Dispatch } from "redux";
import { SET_COUNTRY_SUCCESS } from "../types/getCountryTypes";

export const getCountry = (data: countriesInterface) => {
  return {
    type: SET_COUNTRY_SUCCESS,
    payload: data,
  };
};

export const getCountryData = (country: string) => {
  return async (dispatch: Dispatch) => {
    try {
      //   dispatch(fetchCountriesBegin());
      const response = await axios.get(
        `https://restcountries.com/v2/name/${country}`
      );
      console.log(response.data);
      dispatch(getCountry(response.data));
      return response.data;
    } catch (error) {
      //   dispatch(fetchCountriesError(error));
    }
  };
};
