import React from 'react';
import ReactDOM from 'react-dom';
import logo from './object.png'
import banner from './Tagline.png'
import phonebanner from './phone_tagged.png'
import { useMediaQuery } from 'react-responsive'

function  Info() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div style = {{ marginTop: '2.5%' }}>
        {isDesktopOrLaptop && <div style = {{ display: 'inline-block', marginLeft: '4%', marginBottom: '5%' }}>
            <img src = {banner} />
        </div>}
        {isRetina && <div style = {{ display: 'inline-block', marginLeft: '4%', marginBottom: '5%' }}>
            <img src = {banner} />
        </div>}
        {isTabletOrMobile && <div style = {{ display: 'inline-block', width: 'auto', alignItems: 'center' }}>
            <img style = {{ width: 'auto' }} src = {phonebanner} />
        </div>}
        {isDesktopOrLaptop && <div style = {{ display: 'inline-block', marginLeft: '15%' }}>
            <img src = {logo} />
        </div>}
        {isRetina && <div style = {{ display: 'inline-block', marginLeft: '15%' }}>
            <img src = {logo} />
        </div>}
        {isTabletOrMobile && <div style = {{ display: 'inline-block', marginLeft: '2%', width: 'auto', alignItems: 'center' }}>
            <img style = {{ width: 'auto' }} src = {logo} />
        </div>}
        
        {isDesktopOrLaptop && <button style = {{ 
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
        marginLeft: '5%',
        boxShadow: '10px 5px' }}>Generate My List</button>}
        {isRetina && <button style = {{ 
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
        marginLeft: '5%',
        boxShadow: '10px 5px' }}>Generate My List</button>}
        
        {isTabletOrMobile && <div style = {{ alignItems: 'center' }}><button style = {{ 
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
        boxShadow: '10px 5px' }}>Generate My List</button></div>}
        
    </div>
  )}

  export default Info;