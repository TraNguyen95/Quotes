import { QuoteModel } from "./../models/QuoteModel";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  quotesList: [new QuoteModel()],
  isLoading: true,
  quote: new QuoteModel(),
};

export const QuotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUOTES": {
      state.quotesList = action.quotesList;
      state.quote =
        state.quotesList[Math.floor(Math.random() * state.quotesList.length)];
      return { ...state };
    }

    case "SET_QUOTE": {
      state.quote =
        state.quotesList[Math.floor(Math.random() * state.quotesList.length)];
      return { ...state };
    }

    case "LOADING_TRUE": {
      state.isLoading = true;
      return { ...state };
    }

    case "LOADING_FALSE": {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export const store = createStore(
  combineReducers({ QuotesReducer }),
  applyMiddleware(thunk)
);
