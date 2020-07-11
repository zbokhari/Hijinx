import './App.css';

import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home'

import Spotify from './components/Spotify';
import Youtube from './components/Youtube';

import TermsofService from './components/TermsofService'
import PrivacyPolicy from './components/PrivacyPolicy'


class App extends Component {
  render() {
    return (
      <div className="canvas" >
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="routes-container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/spotify" render={(renderProps) => <Spotify />} />
            <Route path="/youtube" render={(renderProps) => <Youtube />} />
            <Route path="/terms-of-service" render={(renderProps) => <TermsofService />} />
            <Route path="/privacy-policy" render={(renderProps) => <PrivacyPolicy />} />
          </Switch>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    )};
}

export default withRouter(App);
