import React, {Component} from 'react';
import './../../css/Selab.css'

class Selab extends Component {
  //메인 화면
  render() {
    return(
      <div className="Contents-page2">
        {/* 목차 나타낼 부분 */}
        <div className="Lab-list">
          <ol>
            <li>Members</li>
            <li>Research</li>
            <li>Publications</li>
            <li>Contact</li>
          </ol>
        </div>

        {/*  */}
      </div>
    );
  }
}

export default Selab;