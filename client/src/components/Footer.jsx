import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import file from '../assets/Anthony_Ramanovich_resume.pdf'
import { ResumeIcon } from '../assets/ResumeIcon.js'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='homeIcons'>
        <a href='https://github.com/AnthonyR2706' className='linkIcon gitIcon' target="_blank" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='2x'/>
            <span class = "buttonDescription descriptionTop"> Github</span>
        </a>
        <a href={file} className='linkIcon resumeIcon' target='_blank' rel='noopener noreferrer'>
            <ResumeIcon/>
            <span class = "buttonDescription descriptionTop"> Resume</span>
        </a>
        <a href = 'mailto:anthonyramanovich@gmail.com' className='linkIcon mailIcon'>
            <FontAwesomeIcon icon={faAt} size='2x'/>
            <span class = "buttonDescription descriptionTop"> Email</span>
        </a>
      </div>
    </div>
  )
}

export default Footer