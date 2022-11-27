import React from 'react'
import Contact from '../../component/contact/Contact'
import Footer from '../../component/footer/Footer'
import HomePage from '../../component/homePage/HomePage'
import Project from '../../component/project/Project'
import Skills from '../../component/skills/Skills'

function Home() {
  return (
    <div>
        <HomePage/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home