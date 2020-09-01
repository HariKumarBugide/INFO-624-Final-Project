import React from 'react';
import logo from './logo.svg';
import './App.css';

import Searchengine from './search_fields';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Results from'./results.js'
import NoResults from'./noresults.js'

function App() {
  return (
   <Router>
      <Switch>
        <Route exact path="/" component={Searchengine} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/noresults" component={NoResults} />

      </Switch>
    </Router>
  );
}

export default App;
