import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-container'>
        <div className='skills-contain'>
            <div>
                <h1 className='skill-title'>Technical Skills</h1>
            </div>
            <section className='skills-flex'>
                <div>
                    <img src='css.png' alt='css-icons' className='skills'/>
                    <p>CSS</p>
                </div>
                <div>
                    <img src='html.png' alt='html-icons' className='skills'/>
                    <p>HTML</p>
                </div>
                <div>
                    <img src='js2.png' alt='javascript-icons' className='skills'/>
                    <p>JAVASCRIPT</p>
                </div>
                <div>
                    <img src='npm.png' alt='npm-icons' className='skills'/>
                    <p>NPM</p>
                </div>
                <div>
                    <img src='git.png' alt='git-icons' className='skills'/>
                    <p>GIT</p>
                </div>
                <div>
                    <img src='react.png' alt='react-icons' className='skills'/>
                    <p>REACT</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Skills