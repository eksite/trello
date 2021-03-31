import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Route1 from './Route1.jsx'
import Route2 from './Route2.jsx'
import HomePage from './HomePage.jsx'

const App = () => {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/route2" component={Route2} />
              <Route path="/route1" component={Route1} />
          </Switch>
      </Router>
  )
}

export default App;