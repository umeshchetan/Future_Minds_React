import React from 'react'

import PropTypes from 'prop-types'
import TrainingLogo from '../Assets/logo.png';

import './navbar.css'

const Navbar = (props) => {

  const handleLogin = () => {
    alert('Only Admin can Login... :)');
  }
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={TrainingLogo}
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <span className="thq-link thq-body-small">{props.link1}</span>
            <span className="thq-link thq-body-small">{props.link2}</span>
            <span className="thq-link thq-body-small">{props.link3}</span>
            <span className="thq-link thq-body-small">
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfBZrufytpTHenXgYoNPvAT1hcrEtxx-V1zJS9HafqzlKqpEg/viewform?usp=sf_link' target='_blank'>{props.link4}</a>
            </span>
            {/* <span className="thq-link thq-body-small">{props.link5}</span> */}
          </nav>
          <div className="navbar-buttons1">
            <button className="navbar-action11 thq-button-animated thq-button-filled">
              <span className="thq-body-small">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfBZrufytpTHenXgYoNPvAT1hcrEtxx-V1zJS9HafqzlKqpEg/viewform?usp=sf_link' target='_blank'>Enroll Now</a></span>
            </button>
            <button className="navbar-action21 thq-button-outline thq-button-animated" onClick={() => handleLogin()}>
              <span className="thq-body-small">Login</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={TrainingLogo}
                className="navbar-logo"
                style={{height: '10rem'}}
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              {/* <span className="thq-link thq-body-small">{props.link5}</span> */}
            </nav>
          </div>
          <div className="navbar-buttons2">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link1: 'Home',
  // link5: 'Link5',
  link2: 'Courses',
  logoSrc:
    '',
  action2: '/courses',
  logoAlt: 'Training Institute Logo',
  link3: 'About Us',
  action1: '/',
  link4: 'Contact Us',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  // link5: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
}

export default Navbar
