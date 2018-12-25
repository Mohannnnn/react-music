import React, { Component } from 'react';
import './app.css';
import Layout from './pages/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <div className="hello-world">
          hello world
          <img alt="logo" src="./assets/img/logo.svg" width="120px" />
        </div>
        <Layout />
      </div>
    );
  }
}
export default App;
