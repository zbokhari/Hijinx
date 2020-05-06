import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Youtube from './components/Youtube';
import Spotify from './components/Spotify';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import TermsofService from './components/TermsofService'
import PrivacyPolicy from './components/PrivacyPolicy'



import './App.css';

class App extends Component {

  state = {
  }


  render() {
    return (
      <div className="canvas" >
        {/* <div className="logo-container">
          <a href="/"><img className="logo" src='https://lh3.googleusercontent.com/zo6JSKuv0lY4-XXQLQcxvrgHIGXRHhs42puq96STDMR5HAmbPk4D9K6cusYGX7VPb99CH1CwFTA7inHXOM7KMqkFonc0RUNs9VwzUo3uB8P1aSObxhA2DhLwRzJ8rZXJqAQHwWsasOb7kNYP53wkqi-tDdC4o2lx8NsfXiLzeV0M5Ca7o_BMiuS3Q9Zt4R5_OF8HYJbqC-xdAsKt82nH-kOqeUaK12YjdJPGqds1pW9x_hYKotlX54TOMw4qsc6rjzRjdhSqlnZHFnfTxp8C3ra8bTC9dKpluuefpz4Tfbcdes2TbTAOYrsKCYjRxBvx8r0byXXGpdoabYjp4xm7AxNKgGQojqAlgWkpC8gKZOtuy1v-3kaylMr0_HKIdD9KluSbF_GkoFV8xahtPLPDI1iiBu9BFfnT2p60I98RmzP-8d4kT9YCPBH3TXwyuFBK4iaaH9pSd_X04mB4dn2nPMXo7NuuKkAn00c0vL6TfaXFwB9cgneW0jBpUe0e6Erd0bN3TC1RozOBi7A-VAF6ecIyaMzAzDLokoqe5HQBR_3jlcjNLiu6GYtMqyPfplKbl7zGynT5zojZOglC9bx-I_A-h2OloqtOpQvEyhYYZiEE69bjhNcX-rf30NGspatwogeUDM3r92N--1PTBj9L_zEOTy66IJ60Ncnno4ml34vTDetInFGiAiY-CZA=w1280-h128-no' alt="Logo" /></a>
        </div> */}
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="routes-container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/spotify" render={(renderProps) => <Spotify />} />
            <Route path="/youtube" render={(renderProps) => <Youtube />} />
            <Route path="/contact" render={(renderProps) => <Contact />} />
            <Route path="/terms-of-service" render={(renderProps) => <TermsofService />} />
            <Route path="/privacy-policy" render={(renderProps) => <PrivacyPolicy />} />
          </Switch>
        </div>
        <div className="footer-container">
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
