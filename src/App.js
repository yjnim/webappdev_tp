import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import { configureStore } from './configureStore';
import Container from './NotiContents';
import { Link } from 'react-router-dom';
import Popmodal from './Popmodal';

import './App.css';

//notifiction 테스트용
const store = configureStore();
window.appStore = store;

//Home
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <div className="Noti">
          <Provider store={store}>
            <Container />
          </Provider>
        </div>
        <div className="linkinapp">
          <Link id="linkinapp" to="/System">To System</Link>
        </div>
        <Popmodal></Popmodal>
      </div>
    )
  }
}

export default App;
