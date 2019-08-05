import React, {Component} from 'react';
import '../stylesheets/Hero.css';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Button from '../components/Button';


class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <Nav/>
        <Content/>
        <Button/>
      </div>
    );
  }
}
export default Hero;
