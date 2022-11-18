import React, {useState, useEffect, useRef} from 'react';
import Landing from './components/Landing';
import './App.css';
import HomeAbout from './components/HomeAbout';
import HomeFeature from './components/HomeFeature';
import HomeNFT from './components/HomeNFT';
import HomeProjects from './components/HomeProjects';
import NavBar from './components/NavBar';
import MyParallaxBanner from './components/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import SocialBubbles from './components/SocialBubbles';
import StickyMenu from './components/StickyMenu';
import {getSortedUrls} from './utils/firebase'
import placeholder from './assets/placeholderImg.jpg'

import PageRouter from './components/PageRouter';

const homePromise = import('./components/Home');
const Home = React.lazy(() => homePromise);

// responsive breaks under 480px?
// responsiveness overlap when short screen
// lazy import below fold
// TODO:
// react progressive image laoding
// lazy import
// host site


function App() {
  const [enter, setEnter] = useState(false)
  const [page,setPage] = useState('landing')
  const [show, setShow] = useState(false);
  const [bannerImgList, setBannerImgList] = useState([])

  useEffect(()=>{
    getSortedUrls('homeBanner').then(res=>setBannerImgList(res))
  },[])

  const toggleLanding = ()=>{
    setEnter((enter)=>!enter)
  }

 const openModal =(pageID)=>{
    setShow(true)
    setPage(pageID)
    disableScroll()

  }

  const closePage =() =>{
    setShow(false);
    enableScroll()
  }

  function handleScrollSlide() {
    var reveals = document.querySelectorAll(".js-scroll");
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 50;
  
      if (elementTop < (windowHeight - elementVisible)) {
        reveals[i].classList.add("scrolled");
      } else {
        reveals[i].classList.remove("scrolled");
      }
    }
  }
  window.addEventListener("scroll", handleScrollSlide);

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = () => window.scrollTo(0, scrollTop);
} 
function enableScroll() {
    window.onscroll = function() {};
}


  return (
    <div className="App">
      {!enter ? <Landing toggleLanding={toggleLanding} />:null}
      {enter ? (
      <div>
        <NavBar toggleLanding={toggleLanding}/>
        <StickyMenu/>
      <ParallaxProvider>
        <Home/>
        <HomeAbout navID='About'  slideDirection='slide-left'  openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[0] || placeholder}/>
        <HomeFeature navID='Feature' slideDirection='slide-right'  openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[1]|| placeholder}/>
        <HomeNFT navID='NFT' slideDirection='slide-left' openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[2]|| placeholder}/>
        <HomeProjects navID='Projects' slideDirection='slide-left' openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[3]|| placeholder} aspectRatio='2 / 1'/>
      </ParallaxProvider>
      </div>
       ) :null}
      {show ? <PageRouter pageID={page} closePage={closePage}/>:null}
      <footer>
        <SocialBubbles/>
        <p>©2022 GC. All rights reserved.</p></footer>
    </div>
  );
}

export default App;
