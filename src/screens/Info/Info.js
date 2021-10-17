import React from 'react';
import ReactDOM from 'react-dom';
import logo from './object.png'
import banner from './Tagline.png'

function  Info() {
  return (
    <div style = {{ marginTop: '2.5%' }}>
        <div style = {{ display: 'inline-block', marginLeft: '4%', marginBottom: '5%' }}>
            <img src = {banner} />
        </div>
        <div style = {{ display: 'inline-block', marginLeft: '15%' }}>
            <img src = {logo} />
        </div>
        
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
        marginLeft: '5%',
        boxShadow: '10px 5px' }}>Generate My List</button>
    </div>
  )}

  export default Info;