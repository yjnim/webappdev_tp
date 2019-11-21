import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import AboutNavBar from './components/AboutNavBar';

import Member from './routes/Member';
import Research from './routes/Research';
import Publications from './routes/Publications';
import Contact from './routes/Contact';

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
  //메인 화면
  render() {
    function loremIpsum() {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at dolor nunc. Cras imperdiet nulla vel nibh rhoncus ultrices. Ut tincidunt vitae libero ac aliquam. Donec cursus auctor neque et finibus. Donec a dolor eu libero tempor aliquet quis nec eros. Etiam et turpis vitae tortor ornare sagittis. Nullam sodales ipsum in massa tristique, non viverra dolor interdum. Sed non ligula volutpat, tincidunt elit nec, eleifend enim. Integer pretium consequat fringilla. Curabitur venenatis finibus tellus, et varius velit faucibus non. Nulla dignissim risus vel sapien pharetra, id ullamcorper mauris laoreet. Fusce non nibh sed arcu consectetur euismod eu at enim. Donec tempus urna vitae orci iaculis, nec accumsan libero euismod. Etiam at lectus a diam rhoncus dapibus ac dapibus neque. Nam nec turpis sagittis, finibus tortor ac, fermentum dui. Donec vitae viverra lectus, a volutpat velit.
        <br />
          Aliquam varius consectetur augue eu elementum. Etiam sollicitudin iaculis lorem non ornare. Aenean pretium, velit ac hendrerit maximus, nibh lacus egestas nisi, nec tempus lectus lectus egestas odio. Donec sit amet mattis sapien, at placerat lorem. Nulla quis convallis nisl. Vestibulum odio ligula, ultricies non dictum lacinia, ultricies vitae risus. Cras ornare ornare justo, eu luctus ipsum accumsan vitae. Cras rhoncus venenatis felis sed rutrum. Duis sed scelerisque est, non vestibulum nisl. Etiam bibendum enim massa, eu eleifend nunc ultricies at.
        <br />
          Nulla sem libero, varius non iaculis non, placerat et ipsum. Vivamus consectetur enim sed mi vehicula tincidunt. Nullam fermentum tristique massa eget malesuada. Nam hendrerit ac ante ut ultrices. Phasellus sagittis ligula pulvinar finibus efficitur. Proin id lacus lacus. Maecenas neque arcu, faucibus eget dapibus quis, tincidunt ac tellus. Aliquam sit amet leo ac quam tempus molestie. Pellentesque sodales imperdiet ligula nec malesuada. Cras auctor justo eros, eget dictum erat pharetra eu. Donec vitae diam pretium, auctor metus id, iaculis nisl. Curabitur aliquet lacinia arcu, ut pellentesque dui efficitur ut. Nam cursus lectus sit amet diam sodales, id feugiat tortor semper.
        </p>
      );
    }

    return(
      <Router>
        <div className="Contents-page2">
          <AboutNavBar />
          <div className="Lab-contents">
          <Route
              render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={700}
                  classNames={classNames}
                  >
                  <Switch location={location}>
                  <Route exact path="/About/Selab/" component={Member} />
                  <Route exact path="/About/Selab/Research" component={Research} />
                  <Route exact path="/About/Selab/Publications" component={Publications} />
                  <Route exact path="/About/Selab/Contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              )} />
          </div>
        </div>
      </Router>

      // <div className="Contents-page2">
      //   {/* 목차 나타낼 부분 */}
      //   <div className="Lab-list">
      //     <ol>
      //       <li>
      //         <a name="member" onClick={ RenderContents(this.name) }>
      //           <img src={ Membericon } className="Lab-list-icon" alt="member icon"></img>
      //           Members
      //         </a>
      //       </li>
      //       <li>
      //         <a name="research" onClick={ RenderContents(this.name) }>
      //           <img src={ Researchicon } className="Lab-list-icon"  alt="research icon"></img>
      //           Research
      //         </a>
      //       </li>
      //       <li>
      //         <a name="publication" onClick={ RenderContents(this.name) }>
      //           <img src={ Publicationicon } className="Lab-list-icon" alt="publication icon"></img>
      //           Publications
      //         </a>
      //       </li>
      //       <li>
      //         <a name="contact" onClick={ RenderContents(this.name) }>
      //           <img src={ Contacticon } className="Lab-list-icon" alt="contact icon"></img>
      //           Contact
      //         </a>
      //       </li>
      //     </ol>
      //   </div>
      //   <div className="Lab-contents">
      //     { MemberRender() }
      //     { ResearchRender() }
      //     { PublicationRender() }
      //     { ContactRender() }
      //   </div>
      // </div>
    );
  }
}

export default Selab;