import React from 'react';
import ReactDOM from 'react-dom';
import text from './text.png'
import banner from './completebanner.png'
import footer from './footer.png'
import { useMediaQuery } from 'react-responsive'

function  About() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
  return (
    <div style = {{ width: '100%'}}>
    <div style = {{ backgroundColor: '#d3e0dd', width: 'auto' }}>
        <br></br><br></br>
        <p style = {{ font: 'normal bold normal 40px/60px Sitka Display', textAlign: 'center' }}>How it Works</p>
        {/* <p>You are special. You select what is most important to you. We analyze the Dwellics database and instantly</p>
        <p> create a personalized lists of the best places for you to move and where you could be happy living.</p> */}
        {isBigScreen && <div style = {{ alignItems: 'center', textAlign: 'center' }}><p style = {{ font: 'normal bold normal 25px/40px Sitka Display' }}>You are special. You select what is most important to you. We analyze the Dwellics database and instantly<br></br>
        create a personalized lists of the best places for you to move and where you could be happy living.</p></div>}
        {isDesktopOrLaptop && <div style = {{ alignItems: 'center', textAlign: 'center' }}><p style = {{ font: 'normal bold normal 25px/40px Sitka Display' }}>You are special. You select what is most important to you. We analyze the Dwellics database and instantly<br></br>
        create a personalized lists of the best places for you to move and where you could be happy living.</p></div>}
        {isTabletOrMobile && <div style = {{ alignItems: 'center', textAlign: 'center' }}><p style = {{ font: 'normal bold normal 25px/40px Sitka Display' }}>You are special. You select what is most important to you. We analyze the Dwellics database and instantly<br></br>
        create a personalized lists of the best places for you to move and where you could be happy living.</p></div>}
        {isPortrait && <div style = {{ alignItems: 'center', textAlign: 'center' }}><p style = {{ font: 'normal bold normal 25px/40px Sitka Display' }}>You are special. You select what is most important to you. We analyze the Dwellics database and instantly<br></br>
        create a personalized lists of the best places for you to move and where you could be happy living.</p></div>}
        {isRetina && <div style = {{ alignItems: 'center', textAlign: 'center' }}><p style = {{ font: 'normal bold normal 25px/40px Sitka Display' }}>You are special. You select what is most important to you. We analyze the Dwellics database and instantly<br></br>
        create a personalized lists of the best places for you to move and where you could be happy living.</p></div>}
        {/* {isTabletOrMobile && <div style = {{ alignItems: 'center' }}><img src = {text} style = {{ marginLeft: '18%', width: 'auto' }} /></div>}
        {isPortrait && <div style = {{ alignItems: 'center' }}><img src = {text} style = {{ marginLeft: '18%', width: 'auto' }} /></div>}
        {isRetina && <div style = {{ alignItems: 'center' }}><img src = {text} style = {{ marginLeft: '18%', width: 'auto' }} /></div>} */}
        <br></br><br></br>
        <button style = {{ 
            backgroundColor: '#D37453',
            color: '#eeeeee',
            textAlign: 'center',
            fontSize: '16px',
            borderRadius: '15px',
            borderColor: '#707070',
            borderWidth: '1px',
            padding: '20px',
            width: 'auto',
            transition: 'all 0.5s',
            cursor: 'pointer',
            font: 'normal normal bold 15px/20px Sitka Display',
            letterSpacing: '0px',
            marginLeft: '45%', }}>Generate My List</button><br></br><br></br><br></br><br></br>
            {isDesktopOrLaptop && <div style = {{ alignItems: 'center' }}><img src = {banner} style = {{ marginLeft: '5%' }} /></div>}
             {isDesktopOrLaptop &&<footer>
            <img src = {footer} style = {{  }} />
        </footer>}
    </div></div>
  )}

  export default About;