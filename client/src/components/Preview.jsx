import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Preview = ({img, link, gLink}) => {
  return (
    <div className='previewContainer'>
      <div className='previewImgWrap'>
        <img className="previewImg" src={img} alt='Preview of Session Timer project'/>
      </div>
      <div className='previewLinks'>
        <a className='visitPreview' href={link} target='_blank' rel='noopener noreferrer'>
          Visit
        </a>
        <a href={gLink} className='linkIcon repositoryIcon' target="_blank" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='2x'/>
            <span class = "buttonDescription descriptionRight"> Repository</span>
        </a>
      </div>
    </div>
  )
}

export default Preview