import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';
import Main from './pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
