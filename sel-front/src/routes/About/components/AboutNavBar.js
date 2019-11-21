import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './../../../css/Selab.scss';

import Membericon from './../../../img/member.svg';
import Publicationicon from './../../../img/publication.svg';
import Researchicon from './../../../img/research.svg';
import Contacticon from './../../../img/contact.svg';

class AboutNavBar extends Component {
    render() {
        return (
        <div className="Lab-list">
          <ol>
            <li>
              <Link to="/About/Selab/">
                <img src={ Membericon } className="Lab-list-icon" alt="member icon"></img>
                Members
              </Link>
            </li>
            <li>
              <Link to="/About/Selab/Research">
                <img src={ Researchicon } className="Lab-list-icon"  alt="research icon"></img>
                Research
              </Link>
            </li>
            <li>
              <Link to="/About/Selab/Publications">
                <img src={ Publicationicon } className="Lab-list-icon" alt="publication icon"></img>
                Publications
              </Link>
            </li>
            <li>
              <Link to="/About/Selab/Contact">
                <img src={ Contacticon } className="Lab-list-icon" alt="contact icon"></img>
                Contact
              </Link>
            </li>
          </ol>
        </div>
        );
    }
}

export default AboutNavBar;