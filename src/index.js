import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ItemPage from "./pages/ItemPage/ItemPage";
import { store } from "./store/store.js";
import "./styles/reset.css";
import "./styles/styles.scss";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Switch>
        <Route component={ItemPage} path="/item/:id" />
        <Route component={HomePage} path="/:page?" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
