import React from 'react';
import './Project.css'
import WorkList from './WorkList';

function Project() {
  return (
    <div className='pro-container'>
        <div className='pro-contain'>
            <section>
                <h1 className='pro-title'>My Projects</h1>
            </section>
            <WorkList/>
        </div>
    </div>
  )
}

export default Project