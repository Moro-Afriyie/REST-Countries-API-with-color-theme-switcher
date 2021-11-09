import {
  SET_COUNTRY_EMPTY,
  SET_COUNTRY_FAILURE,
  SET_COUNTRY_BEGIN,
  SET_COUNTRY_SUCCESS,
} from "./../types/getCountryTypes";
import { countriesInterface } from "./../../interfaces/interface";
import axios from "axios";
import { Dispatch } from "redux";

export const getCountryBegin = () => {
  return {
    type: SET_COUNTRY_BEGIN,
  };
};

export const getCountrySuccess = (data: countriesInterface) => {
  return {
    type: SET_COUNTRY_SUCCESS,
    payload: data,
  };
};

export const getCountryFailure = (error: unknown) => {
  return {
    type: SET_COUNTRY_FAILURE,
    error: error,
  };
};
export const setCountryEmpty = () => {
  return {
    type: SET_COUNTRY_EMPTY,
  };
};

export const getCountryData = (country: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCountryBegin());
      dispatch(setCountryEmpty());
      const response = await axios.get(
        `https://restcountries.com/v2/name/${country}`
      );
      console.log(response.data);
      dispatch(getCountrySuccess(response.data));
    } catch (error) {
      //   dispatch(getCountryFailure(error));
    }
  };
};
