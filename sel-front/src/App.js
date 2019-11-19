import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

// Component import
import Home from './routes/Home';
import Selab from './routes/About/Selab';
import Lecture from './routes/Course/Lecture';
import Login from './routes/Login';
import NoMatch from './routes/NoMatch';

// CSS import
import './css/App.css';

// function goMain() {
//   var page1 = document.getElementsByClassName("Contents-page1")[0];
//   var page2 = document.getElementsByClassName("Contents-page2")[0];
//   page1.classList.remove("hidedisplay");
//   page1.style.display = "block";
//   page2.style.display = "none";
// }

// function goSELab() {
//   var page1 = document.getElementsByClassName("Contents-page1")[0];
//   var page2 = document.getElementsByClassName("Contents-page2")[0];
//   page1.classList.remove("hidedisplay");
//   page1.classList.add("hidedisplay");
//   setTimeout(function() { 
//     page1.style.display = "none"; 
//     page2.classList.remove("newdisplay");
//     page2.classList.add("newdisplay");
//     page2.style.display = "block"; 
//   }, 700);
  
// }


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <NavBar /> 
          <div className="App-container">
            <div className="App-mainbg">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About/Selab" component={Selab} />
                <Route exact path="/Course/Lecture" component={Lecture} />
                <Route exact path="/Login" component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
