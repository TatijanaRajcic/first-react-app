import React, {Component} from 'react';
import './stylesheets/App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
        <Footer/>
      </div>
    );
  }
}
export default App;
