import React, {Component} from 'react';
import './../css/Login.css'

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
                      <span className="Login-noti">ID</span>
                      <input type="text" className="Login-input"/>
                    </div>
                    <div className="Login-input-div">
                      <span className="Login-noti">PW</span>
                      <input type="text" className="Login-input"/>
                    </div>
                  </form>
              </div>
            </div>
        );
    }
}

export default Login;