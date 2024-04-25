
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ChartPage from './pages/ChartPage';
import CurrencyConverterApp from './components/CurrencyConverterApp';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


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
      <RouterSwitch> {/* Use RouterSwitch instead of Switch */}
        <Route exact path="/" component={CurrencyConverterApp} />
        <Route path="/chart" component={ChartPage} />
      </RouterSwitch>
    </Router>
  );
};

export default Routes;
