import React, { Component } from 'react';
import logo from './img/logo.svg';
import dribbble from './img/dribbble.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';
import email from './img/email.svg';

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

class Header extends Component {
    render() {
        return (
            <header>
                <div class="col-header-4">
                    <a class="header-links" href="#">PORTFOLIO</a>
                    <a class="header-links" href="#">ABOUT</a>
                    <a class="header-links" href="#">RESUME</a>
                </div>
                <div class="col-header-2">
                    <a href="#"><img class="header-logo" src={logo} /></a>
                </div>
                <div class="col-header-4">
                    <a href="#"><img src={dribbble} /></a>
                    <a href="#"><img src={linkedin} /></a>
                    <a href="#"><img src={twitter} /></a>
                    <a href="#"><img src={email} /></a>
                </div>
            </header>
        );
    }
}

export default App;
