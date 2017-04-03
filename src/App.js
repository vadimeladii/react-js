import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js'
import 'react-flex/index.css';
import './css/bootstrap/css/bootstrap.css';



class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="App">
              <Header/>
              <Content />
              <Footer />
          </div>
        );
    }
}

export default App;
