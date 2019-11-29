import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './../../../css/Selab.scss';

import Membericon from './../../../img/member.svg';
import Publicationicon from './../../../img/publication.svg';
import Researchicon from './../../../img/research.svg';
import Contacticon from './../../../img/contact.svg';

import PropTypes from 'prop-types';

class AboutNavBar extends Component {
  constructor(props) {
    super(props);

    this.changeLocation = this.props.onChangeLocation.bind(this);
  }

  changeLocation(index) {
    this.props.onChangeLocation(index);
  }

    render() {
        return (
        <div className="Lab-list">
          <ol>
            <li>
              <Link onClick={this.changeLocation.bind(this, 0)} to="/About/Selab">
                <img src={ Membericon } className="Lab-list-icon" alt="member icon"></img>
                Members
              </Link>
            </li>
            <li>
              <Link onClick={this.changeLocation.bind(this, 1)} to="/About/Selab">
                <img src={ Researchicon } className="Lab-list-icon"  alt="research icon"></img>
                Research
              </Link>
            </li>
            <li>
              <Link onClick={this.changeLocation.bind(this, 2)} to="/About/Selab">
                <img src={ Publicationicon } className="Lab-list-icon" alt="publication icon"></img>
                Publications
              </Link>
            </li>
            <li>
              <Link onClick={this.changeLocation.bind(this, 3)} to="/About/Selab">
                <img src={ Contacticon } className="Lab-list-icon" alt="contact icon"></img>
                Contact
              </Link>
            </li>
          </ol>
        </div>
        );
    }
}


// npm i prop-types
AboutNavBar.propTypes = {
  onChangeLocation: PropTypes.func.isRequired
};

export default AboutNavBar;