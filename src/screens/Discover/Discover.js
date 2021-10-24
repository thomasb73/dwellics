import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import banner from './list_item.png'
import { useMediaQuery } from 'react-responsive'
//import './Home.css',
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    marginLeft: '5%',
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Discover() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div style = {{ backgroundColor: '#d4e1de', height: '100%', width: '100%' }}>
      <br></br>
      <nav id="navbar">
        <p style = {{ font: 'normal normal bold 40px/58px Sitka Display', color: '#115946', 
        color: '#115946', textAlign: 'center', marginTop: '5%'}}>Discover the Best Cities to Move in 2021</p>
        <p style = {{ font: 'normal bold normal 25px/40px Sitka Display', color: '#115946', 
        color: '#115946', textAlign: 'center' }}>We research and compare over 50,000 cities to help you find the best places to move</p>
      </nav>
      <div style = {{ marginLeft: '5%', marginTop: '5%'}}>
      {isDesktopOrLaptop && <Carousel responsive={responsive}>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
      </Carousel>}
      {isRetina && <Carousel responsive={responsive}>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
        <div><img src = {banner}/></div>
      </Carousel>}
      {isTabletOrMobile && <Carousel responsive={responsive}>
        <div><img src = {banner}/></div>
      </Carousel>}
      </div>
      <br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Discover;
