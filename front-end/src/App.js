
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ChartPage from "./ChartPage"; // Make sure the path is correct
import CurrencyConverterApp from "./components/CurrencyConverterApp";
import { Switch } from "react-router-dom";

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
        <Route path="/chart" component={ChartPage} /> {/* Make sure ChartPage is imported and exists */}
      </Switch>
    </Router>
  );
};

export default Routes;
