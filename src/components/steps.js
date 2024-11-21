import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <ul className="thq-body-large">
              <li>Discover your unique talents and turn them into strengths with personalized learning pathways at our institute.</li>
              <li>Empower your future by exploring your hidden skills through hands-on training and practical projects.</li>
              <li>Find your strengths, build your confidence, and become the professional the world needs with our institute’s guidance.</li>
            </ul>
            <div className="steps-actions">
              <button className="thq-button-animated thq-button-filled steps-button">
                <span className="thq-body-small">
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSfBZrufytpTHenXgYoNPvAT1hcrEtxx-V1zJS9HafqzlKqpEg/viewform?usp=sf_link' target='_blank'>
                    Main action
                  </a>
                </span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step1Description:
    'Browse through our courses and select the one that best fits your learning goals.',
  step3Description:
    'Participate in interactive classes led by experienced instructors to gain valuable skills and knowledge.',
  step2Title: 'Register Online',
  step2Description:
    'Fill out our simple online registration form to secure your spot in the course.',
  step1Title: 'Choose Your Course',
  step3Title: 'Attend Classes',
  step4Description:
    'Upon successful completion of the course, receive a certification to showcase your expertise.',
  step4Title: 'Get Certified',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps
