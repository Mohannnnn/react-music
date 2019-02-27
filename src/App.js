import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routers from './router/index';
import Player from './pages/player/Player';
import store from './store/index';
import './app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Player/>
          <Routers/>
        </div>
      </Provider>
    );
  }
}
export default App;
