import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// import './App.css';

import Header from './components/Header';
// import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';

 import Store from './components/Store';
 import About from './components/About';
import Commissions from './components/Commissions';
import ProductSingle from './components/ProductSingle';



const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/store" component={Store} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={ProductSingle} />
        <Route path="/commissions" component={Commissions} />
        <Route render={() => <Redirect to="/store" />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
