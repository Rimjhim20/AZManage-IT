import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { Provider } from "react-redux";
import {BudgetsProvider} from './contexts/BudgetsContext';
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import $ from "jquery";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <BudgetsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </BudgetsProvider>
  </Provider>,
  rootElement
);

// reportWebVitals();
$(document).on("DOMNodeRemoved", function(e) {
  console.log("Removed: " + e.target.nodeName);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();








