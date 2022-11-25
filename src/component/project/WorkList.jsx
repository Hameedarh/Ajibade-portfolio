import React from 'react';
import './Project.css'
import work from '../../assets/works.json'
import Works from './Works';

function WorkList() {
  return (
    <div className='img-contain'>
        {
            work.map((project) => (
            <Works
            key={project.id}
            picture={project.thumbnail}
            git={project.git}
            link={project.link}
            />
            ))
        }
    </div>
  )
}

export default WorkList