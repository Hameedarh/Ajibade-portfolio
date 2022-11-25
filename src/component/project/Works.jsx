import React from 'react'
import './Project.css'

function Works({picture, git, link}) {
  return (
    <div>
        <div classname="position-div">
            <img src={picture} alt='pic' className='pro-pic'/> 
        </div>
        <div className='img-but-div'>
            <button className='img-but'>view code</button>
            <a href={link}>
              <button className='img-but'>live view</button>
            </a>
        </div>
    </div>
  )
}

export default Works