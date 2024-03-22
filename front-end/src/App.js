// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CurrencyConverterApp from "./CurrencyConverterApp";
import ChartPage from "./ChartPage";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Converter</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
      </ul>
    </nav>
  );
};

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={CurrencyConverterApp} />
        <Route path="/chart" component={ChartPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
