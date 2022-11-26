import React from 'react'
import HomePage from '../../component/homePage/HomePage'
import Project from '../../component/project/Project'
import Skills from '../../component/skills/Skills'

function Home() {
  return (
    <div>
        <HomePage/>
        <Skills/>
        <Project/>
    </div>
  )
}

export default Home