import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg'
import banner from './Group 64@2x.png'
import text from './text.png'
//import './Home.css',

function Home() {
  return (
    <div>
        
       <nav id="navbar">
        <div className="nav-wrapper">
            <img src={logo} style = {{ height: '10%', width: '10%', float: 'left', marginLeft: '3%', marginTop: '2%' }} alt="logo" className="photo" />
        </div>
    </nav>
    
    <div>
        <div style = {{ display: 'inline-block', marginTop: '15%' }}>
          <p style = {{ font: 'normal normal bold 40px/58px Sitka Display', color: '#115946' }}>Where Should I move?</p>
          {/* <p style = {{ font: 'font: normal normal normal 14px/15px Sitka Display', color: '#115946'}}>Automatically get personalized recommendations on where to move.</p>
          <p style = {{ font: 'font: normal normal normal 14px/15px Sitka Display', color: '#115946'}}> Dwellics instantly analyzes thousands of relevant data points and</p>
          <p style = {{ font: 'font: normal normal normal 14px/15px Sitka Display', color: '#115946'}}> your selected preferences like lifestyle, weather, community and</p>
          <p style = {{ font: 'font: normal normal normal 14px/15px Sitka Display', color: '#115946'}}> more to find the perfect place for you to live.</p> */}
          <img src = {text} />
         </div>
        <img src={banner} style = {{ height: '38%', width: '38%', float: 'right', marginTop: '10%', marginRight: '5%',  display: 'inline-block'  }} alt="logo" className="photo" />
    </div>
    <div style = {{ marginLeft: '13%' }}> 
        <button style = {{ display: 'inline-block',
          backgroundColor: '#115946',
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
          margin: '5px', boxShadow: '10px 5px' }}>How it Works</button>
        <button style = {{ display: 'inline-block',
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
          margin: '5px', boxShadow: '10px 5px' }}>Generate My List</button>
    </div>
    </div>
  );
}

export default Home;
