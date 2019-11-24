import React, {Component} from 'react';
import './../css/Login.css'
import Glogo from './../img/google-g-icon.jpg'

class Login extends Component {
    //메인 화면
    render() {
        return(
            <div className="Contents-page2">
              <div className="Login-div">
                  <h1>Login</h1>
                  <hr />
                  <form>
                    <div className="Login-input-div">
                      <span className="Login-title">ID</span>
                      <input type="text" className="Login-input"/>
                    </div>
                    <div className="Login-input-div">
                      <span className="Login-title">PW</span>
                      <input type="text" className="Login-input"/>
                    </div>
                    <div className="Login-button-div">
                      <button type="submit" className="Login-button">
                        Sign in
                      </button>
                    </div>
                    <div className="Login-google-div">
                      <button className="Login-button">
                        <img src={ Glogo } className="Glogo-img"></img>Sign in with Google
                      </button>
                    </div>
                  </form>
              </div>
            </div>
        );
    }
}

export default Login;