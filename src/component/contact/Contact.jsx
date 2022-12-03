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
            <a href="mailto:abisolahamidat@gmail.com"><Envelope size={40}/></a>
            <a href="https://wa.me/08163764664"><Phone size={40}/></a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact