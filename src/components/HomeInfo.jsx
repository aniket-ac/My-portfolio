import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">
      {text}
    </p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue 
    py-4 px-8 text-white mx-5">
      Hello there~. <span className="font-semibold"> Aniket </span> here. 👋🏽 <br />
      A Computer Science Student pursuing B.Tech at Presidency University Bangalore, India.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many projects in React, Flutter and picked up many skills along with it."
      link="/about"
      btnText="Learn More"
    />

  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit My PortFolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I am just a few keystrokes away."
      link="/contact"
      btnText="Let's Talk"
    />
  ),
}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo