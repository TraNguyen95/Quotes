import axios from "axios";
import Swal from "sweetalert2";
import { NEMO_API } from "../utils/config";
import { SweetAlertSuccessful } from "../models/SweetAlertModels";
import { SweetAlertFailure } from "../models/SweetAlertModels";
import { history } from "../App";

const alertSuccess = new SweetAlertSuccessful();
const alertFailure = new SweetAlertFailure();

export const getQuotesAction = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "LOADING_TRUE",
      });

      let result = await axios.get(NEMO_API);

      dispatch({
        type: "GET_QUOTES",
        quotesList: result.data.quotes.reverse(),
      });

      await dispatch({
        type: "LOADING_FALSE",
      });
    } catch (error) {
      Swal.fire({
        ...alertFailure,
      });
      console.log(error);
    }
  };
};

export const createQuotesAction = (formData) => async (dispatch) => {
  try {
    await axios.post(process.env.REACT_APP_API, formData);

    await Swal.fire({
      ...alertSuccess,
      didDestroy: () => {
        dispatch(getQuotesAction());
      },
    });

    window.location.reload();
  } catch (error) {
    Swal.fire({
      ...alertFailure,
    });
    console.log(error);
  }
};

export const updateQuotesAction = (formData, id) => async (dispatch) => {
  try {
    await axios.put(`${process.env.REACT_APP_API}/${id}`, formData);

    await Swal.fire({
      ...alertSuccess,
      didDestroy: () => {
        dispatch(getQuotesAction());
      },
    });

    history.push("/dashboard");
    window.location.reload();
  } catch (error) {
    Swal.fire({
      ...alertFailure,
    });
    console.log(error);
  }
};

export const deleteQuotesAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API}/${id}`);
    
    Swal.fire({
      ...alertSuccess,
      didDestroy: () => {
        dispatch(getQuotesAction());
      },
    });
  } catch (error) {
    Swal.fire({
      ...alertFailure,
    });
    console.log(error);
  }
};
