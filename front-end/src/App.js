
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ChartPage from './ChartPage';
import CurrencyConverterApp from './components/CurrencyConverterApp';

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
