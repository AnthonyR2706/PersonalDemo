import React from 'react'

const Projects = ({PROJECT, getProjectTab, setProjectTab, getProject, setProject,}) => {

  const changeSlide = (x) => {
    if(x >= PROJECT.length){
      x = 0
      console.log("get 1")
    } else if (x < 0) {
      x = PROJECT.length - 1
    }
    setProjectTab(x)
    setProject(PROJECT[x].preview)
  }

  return (
    <div className='projectsContainer'>
      <div className='projectViewerContainer'>
        <div className='projectSlideContainer'>
          {getProject}
          <div className='slidePicker'>
            <a class='prev' onClick={() => changeSlide(getProjectTab - 1)}>&#10094;</a>
            <span class={getProjectTab === 0 ? 'active dot' : 'dot'} onClick={() => changeSlide(0)}/>
            <span class={getProjectTab === 1 ? 'active dot' : 'dot'} onClick={() => changeSlide(1)}/>
            <span class={getProjectTab === 2 ? 'active dot' : 'dot'} onClick={() => changeSlide(2)}/>
            <span class={getProjectTab === 3 ? 'active dot' : 'dot'} onClick={() => changeSlide(3)}/>
            <span class={getProjectTab === 4 ? 'active dot' : 'dot'} onClick={() => changeSlide(4)}/>
            <span class={getProjectTab === 5 ? 'active dot' : 'dot'} onClick={() => changeSlide(5)}/>
            <a class='next' onClick={() => changeSlide(getProjectTab + 1)}>&#10095;</a>
          </div>
        </div>
      </div>
      <div className='projectTextContainer'>
        <div className='projectText'>
          <div className='projectTitle'>
            {PROJECT[getProjectTab.title]}
          </div>
          <div className='projectDescription'>
            {PROJECT[getProjectTab].description}
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Projects