import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import { Layout } from "./layout/Layout";
import { Interior } from "./screens/Interior";
import { Details } from "./screens/Details";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={App} />
          <Route path="/interiores" component={Interior} />
          <Route path="/detalhes" component={Details} />
        </Layout>
      </Switch>
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
