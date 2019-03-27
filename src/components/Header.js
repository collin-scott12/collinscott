import React, { Component } from 'react';
import "../styles/style.sass"

import logo from '../img/logo.svg';
import dribbble from '../img/dribbble.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import email from '../img/email.svg';

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
                    <a class="header-icon" href="https://dribbble.com/collinscott" target="_blank"><img src={dribbble} /></a>
                    <a class="header-icon" href="https://www.linkedin.com/in/collin-scott/"target="_blank"><img src={linkedin} /></a>
                    <a class="header-icon" href="https://twitter.com/Collin_Scott12"target="_blank"><img src={twitter} /></a>
                    <a class="header-icon" href="mailto:collin@collinscott.com"><img src={email} /></a>
                </div>
            </header>
        );
    }
}

export default Header;
