import React, {Component} from 'react';

import AboutNavBar from './components/AboutNavBar';
import { Contact, Member, Publications, Research } from './routes';

import './../../css/Selab.scss';

const pageTrans = 'trans-s'
const classNames = {
  appear: `${pageTrans} appear`,
  appearActive: `${pageTrans} appear active`,
  appearDone: `${pageTrans} appear done`,
  enter: `${pageTrans} enter`,
  enterActive: `${pageTrans} enter active`,
  enterDone: `${pageTrans} enter done`,
  exit: `${pageTrans} exit`,
  exitActive: `${pageTrans} exit active`,
  exitDone: `${pageTrans} exit done`
}


class Selab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ['LabMember', 'LabResearch', 'LabPublications', 'LabContact'],
      index: 0
    };

    this.changeLocation = this.changeLocation.bind(this);
  }

  // state index를 변경해서 렌더링 되는 페이지를 바꿀 것
  changeLocation(nextindex) {
    var name = this.state.location[nextindex];
    var current = document.getElementById('LabCurrent');
    var change = document.getElementById(name);
    current.innerHTML = change.innerHTML;

    this.setState({index: nextindex});
  }

  //더 편하게 하라고 컴포넌트로 쪼갰습니다.
  //메인 화면
  render() {
    return(
        <div className="Contents-page2">
          <AboutNavBar
          onChangeLocation={this.changeLocation}/>
          <div className="Lab-contents">
            <div Id="LabCurrent">
              <p>Default</p>
            </div>
          </div>
          <Contact />
          <Member />
          <Publications />
          <Research />
        </div>
    );
  }
}

export default Selab;