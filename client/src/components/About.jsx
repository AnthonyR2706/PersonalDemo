import React from 'react'
import file from '../assets/Anthony_Ramanovich_resume.pdf'

const About = () => {
  return (
    <div className='aboutContainer tabContainer'>
        <div className='aboutText tabText'>
            Graduated from Brooklyn College with a B.S. in Computer Science in 2023
        </div>
        <a href={file} className='resumeLink' target='_blank' rel='noopener noreferrer'>
          Resume
        </a>
    </div>
  )
}

export default About