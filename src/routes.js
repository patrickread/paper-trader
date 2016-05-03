import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from "./components/App.jsx";
import PortfolioTab from "./components/PortfolioTab.jsx";
import TransactionsTab from "./components/TransactionsTab.jsx";

const routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} location="history">
    <Route path="/" component={App}>
      <IndexRoute component={PortfolioTab} />
      <Route path="portfolio" component={PortfolioTab} />
      <Route path="transactions" component={TransactionsTab} />
    </Route>
  </Router>
)


export default routes
