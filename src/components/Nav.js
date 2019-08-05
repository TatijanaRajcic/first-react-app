import React, {Component} from 'react';
import '../stylesheets/Nav.css';

class Nav extends Component {
  render() {
    return (
      <header className="Nav">
        <img src="images/ironhack-logo.svg" alt=""/>
        <img src="images/menu-top.svg" alt=""/>
      </header>
    );
  }
}
export default Nav;