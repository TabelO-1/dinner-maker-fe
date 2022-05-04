import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Meals from './Meals';
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Meals />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
