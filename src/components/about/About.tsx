import React from 'react'
import { Container } from './about_style'

const About = () => {
  return (
    <Container>
        <div className='center col about-text'>
            <p className='title'>ABOUT US</p>
            <p className='name'>Boburiy<br></br>Restaurant</p>
            <div className='dash'></div>
            <p className='text'>Try it out for yourself! Visit us or order meals for your home or office!</p>
            <p className='text'>01049493464  ☎️  <br></br>아주로 4번길 18 2층</p>
        </div>
        <div className='image-div'>
            <img className='image' src='./steak.jpeg' />

        </div>
    </Container>
  )}
export default About