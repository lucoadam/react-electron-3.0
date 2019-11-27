// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import Logo from './logo.png';
import Gif from './nepalflag.png';


export default class Header extends Component {

  render() {
    console.log('header');
    console.log(styles);
    return (
      <div className={styles.header} data-tid="header">
        <div className="img">
          <img src={Logo} height="200" width="200" alt="website logo" />
        </div>
        <div className={styles.topic} data-tid="topic">
          <h4 className={styles.subtopic} data-tid="subtopic">
            नेपाल सरकार
          </h4>
          <h4 className={styles.subtopic} data-tid="subtopic">
            भूमि व्यवस्था सरकारी तथा गरिवी निवारण{' '}
          </h4>
          <h4 className={styles.subtopic} data-tid="subtopic">
            भूमि व्यवस्थापन तथा अभिलेख विभाग
          </h4>
          <h2>
            <b>मालपोत कार्यालय</b>
          </h2>
          <h3 className={styles.subtopic} data-tid="subtopic">
            साँखु (काठमाण्डौ)
          </h3>
          {/* <Link to={routes.COUNTER}>to Counter</Link> */}
        </div>
        <div>
          <img src={Gif} height="200" width="200" alt="nepalflag gif" />
        </div>
      </div>
    );
  }
}
