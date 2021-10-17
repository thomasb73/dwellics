import React from 'react';
import ReactDOM from 'react-dom';
import text from './text.png'
import banner from './completebanner.png'
import footer from './footer.png'

function  About() {
  return (
    <div style = {{ backgroundColor: '#d3e0dd' }}>
        <br></br><br></br>
        <p style = {{ font: 'normal bold normal 40px/60px Sitka Display', textAlign: 'center' }}>How it Works</p>
        {/* <p>You are special. You select what is most important to you. We analyze the Dwellics database and instantly</p>
        <p> create a personalized lists of the best places for you to move and where you could be happy living.</p> */}
        <div style = {{ alignItems: 'center' }}><img src = {text} style = {{ marginLeft: '18%' }} /></div><br></br><br></br>
        <button style = {{ 
            backgroundColor: '#D37453',
            color: '#eeeeee',
            textAlign: 'center',
            fontSize: '16px',
            borderRadius: '15px',
            borderColor: '#707070',
            borderWidth: '1px',
            padding: '20px',
            width: '170px',
            transition: 'all 0.5s',
            cursor: 'pointer',
            font: 'normal normal bold 15px/20px Sitka Display',
            letterSpacing: '0px',
            marginLeft: '45%',
            boxShadow: '10px 5px' }}>Generate My List</button><br></br><br></br><br></br><br></br>
            <div style = {{ alignItems: 'center' }}><img src = {banner} style = {{ marginLeft: '5%' }} /></div>
        <footer>
            <img src = {footer} style = {{  }} />
        </footer>
    </div>
  )}

  export default About;