import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Position: 'Digital Marketer',
  author1Position: 'Web Developer',
  author3Alt: 'Mike Johnson Image',
  author1Name: 'John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1616337900440-056dd0f082d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDMzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Mike Johnson',
  review2:
    'The Digital Marketing course exceeded my expectations. I learned practical strategies that I could immediately apply to my job. Highly recommended!',
  author2Name: 'Jane Smith',
  author4Position: 'Software Engineer',
  author4Name: 'Sarah Lee',
  author4Src:
    'https://images.unsplash.com/photo-1542131597-a4390333d136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDMzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'John Doe Image',
  author2Src:
    'https://images.unsplash.com/photo-1649779777797-66491227b1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDMzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Jane Smith Image',
  author4Alt: 'Sarah Lee Image',
  content1:
    'Read what our students have to say about their experience with our courses.',
  author3Position: 'IT Support Specialist',
  review1:
    'I took the Web Development course and it was fantastic! The instructors were knowledgeable and the hands-on projects really helped me grasp the concepts.',
  heading1: 'Testimonials',
  review3:
    'As an IT Support Specialist, the Desktop Support Engineer course was exactly what I needed to advance my skills. The content was relevant and up-to-date.',
  review4:
    'I enrolled in the Node Js and Express Js course and it was a game-changer for my career. The instructors were top-notch and the curriculum was comprehensive.',
}

Testimonial.propTypes = {
  author2Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author1Src: PropTypes.string,
  author3Name: PropTypes.string,
  review2: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
