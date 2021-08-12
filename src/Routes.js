import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';
import Main from './pages/Main/Main';
// import Detail from './pages/DetailPage/Detail';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/detail/:product_id" component={Detail} /> */}
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
