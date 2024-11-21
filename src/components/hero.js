import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import image from '../Assets/image.jpeg'
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpeg'
import image3 from '../Assets/image3.jpeg'
import image4 from '../Assets/image4.jpeg'
import image5 from '../Assets/image5.jpeg'
import image6 from '../Assets/image6.jpeg'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfBZrufytpTHenXgYoNPvAT1hcrEtxx-V1zJS9HafqzlKqpEg/viewform?usp=sf_link' target='_blank'>
                {props.action2}
              </a>
            </span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={image1}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={image}
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={image2}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={image4}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={image5}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={image6}
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
             <img
              alt="Hero Image"
              src={image3}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={image1}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={image}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={image2}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={image4}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={image5}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src={image6}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
             <img
              alt="Hero Image"
              src={image3}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        {/* <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div> */}
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDMzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1482100199117-a4a38a64e7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Hero Image',
  image1Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1581092917372-d2db8f7904c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1581094377792-6d41a41e16dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1526570207772-784d36084510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1581094482523-8555833e6aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  action2: 'Contact Us',
  action1: 'Explore Courses',
  image8Src:
    'https://images.unsplash.com/photo-1581094377792-6d41a41e16dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1581094377792-6d41a41e16dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1581092918484-8313ada2183a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  heading1: 'Your Future is created by what you choose Today not Tomorrow',
  content1:
    'Take your skills to the next level with our industry-leading courses in Web Development, dot net, Node Js and Express Js, MySql, Desktop Support Engineer, and Digital Marketing. Whether you are a beginner or an experienced professional, we have the right program for you.',
  image10Src:
    'https://images.unsplash.com/photo-1580893196685-f061a838ba99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1581094377792-6d41a41e16dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE2NDM0NHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero
