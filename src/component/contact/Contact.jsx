import React from 'react'
import './Contact.css'
import {Envelope, Phone} from 'phosphor-react'

function Contact() {
  return (
    <div className='con-container'>
      <div className='con-contain'>
        <div>
          <h1 className='con-title'>Get in touch?</h1>
        </div>
        <section className='con-section'>
          <p>Contact me via</p>
          <div>
            <Envelope size={40}/> 
            <Phone size={40}/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact