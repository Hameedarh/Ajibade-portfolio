import React from 'react'
import './HomePage.css';
import {LinkedinLogo, WhatsappLogo, InstagramLogo, GithubLogo} from 'phosphor-react';

function HomePage() {
  return (
    <div className='home-container'>
        <div className='home-contain'>
            <div>
                <nav className='nav-bar'>
                    <h1 style={{color:"white",  borderBottom: "3px dashed tomato", width:"fit-content"}}>Ha-<span style={{color:"tomato"}}>mee-</span>darh</h1>
                </nav>
            </div>
            <section className='section'>
                <div className='icons-div'>
                    <LinkedinLogo size={40}  className='iconss'/>
                    <a href="https://wa.me/08163764664"><WhatsappLogo size={40}  className='iconss'/></a>
                    <a href="https://www.instagram.com/ha.mee.darh"><InstagramLogo size={40}  className='iconss'/></a>
                    <GithubLogo size={40}  className='iconss'/>
                </div>
                <div className='bottom-div'>
                    <div className='text-div'>
                        <div className='name-div'>
                            <h1>Hi</h1>
                            <h2>I'm AJIBADE HAMIDAT ABISOLA</h2>
                        </div>
                        <div className='slide2'>
                            <h3>A FrontEnd Developer</h3>
                        </div>
                        <div className='span-div'>
                            <div>
                                <span className='spanss'>A</span>
                            </div>
                            <div>
                                <span className='spanss'> F</span>
                                <span className='spanss'>r</span>
                                <span className='spanss'>o</span>
                                <span className='spanss'>n</span>
                                <span className='spanss'>t</span>
                                <span className='spanss'>e</span>
                                <span className='spanss'>n</span>
                                <span className='spanss'>d</span>
                            </div>
                            <div>
                                <span className='spanss'> D</span>
                                <span className='spanss'>e</span>
                                <span className='spanss'>v</span>
                                <span className='spanss'>e</span>
                                <span className='spanss'>l</span>
                                <span className='spanss'>o</span>
                                <span className='spanss'>p</span>
                                <span className='spanss'>e</span>
                                <span className='spanss'>r</span>
                            </div>
                        </div>
                        <div>
                            <p>
                                I design functional and responsive website.
                            </p>
                        </div>
                        <div className='icons-div2'>
                            <LinkedinLogo size={40}  className='iconss'/>
                            <a href="https://www.instagram.com/ha.mee.darh"><WhatsappLogo size={40}  className='iconss'/></a>
                            <a href="https://www.instagram.com/ha.mee.darh"><InstagramLogo size={40}  className='iconss'/></a>
                            <GithubLogo size={40}  className='iconss'/>
                        </div>
                        <div>
                            <a href='#projectss'><button className='work-but'>My works</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default HomePage