import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "antd/dist/antd.min.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
