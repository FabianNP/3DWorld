import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl tex-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt="" className='w-4 h-4 object-contain' />
    </Link>
  </div>
)


const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue px-8 py-4 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Fabian</span>
      <br />
      A Software Engineer from Mexico.
    </h1>
  ),
  2: (
    <InfoBox 
      text='Studied with diferents resources and picked up many skills along the way.'
      link='/about'
      btnText='Learn More'
    />
  ),
  3: (
    <InfoBox 
      text='Worked in multiple projects allowing me to create or maintain them'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox 
      text='Need a project done or looking for a dev? I´m just a few clicks away.'
      link='/contact'
      btnText='Let´s talk'
    />
  )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage]
}

export default HomeInfo