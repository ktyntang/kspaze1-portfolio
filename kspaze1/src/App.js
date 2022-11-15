import React, {useState, useEffect, useRef, createRef} from 'react';
import Landing from './components/Landing';
import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import NavBar from './components/NavBar';
import MyParallaxBanner from './components/Banner';
import bannerAbout from './assets/Banners/bannerAbout.png'
import bannerFeature from './assets/Banners/bannerFeature.png'
import bannerNFT from './assets/Banners/bannerNFT.png'
import bannerProjects from './assets/Banners/bannerProjects.png'
import { ParallaxProvider } from 'react-scroll-parallax';
import SocialBubbles from './components/SocialBubbles';
import StickyMenu from './components/StickyMenu';
import PageNFT from './components/PageNFT';

import PageRouter from './components/PageRouter';

const homePromise = import('./components/Home');
const Home = React.lazy(() => homePromise);

// responsive breaks under 480px?
// lazy import below fold
// landing focus on top not bottom


function App() {
  const [enter, setEnter] = useState(false)
  const [page,setPage] = useState('landing')
  const [show, setShow] = useState(false);

  const toggleLanding = ()=>{
    setEnter((enter)=>!enter)
  }

 const openModal =(pageID)=>{
    setShow(true)
    setPage(pageID)
  }

  const closePage =() =>{
    setShow(false);
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

  return (
    <div className="App">
      {!enter ? <Landing toggleLanding={toggleLanding} />:null}
      {enter ? (
      <div>
        <NavBar toggleLanding={toggleLanding}/>
        <StickyMenu/>
      <ParallaxProvider>
        <Home/>
        <SectionOne navID='about'  slideDirection='slide-left'  openModal={openModal}/>
        <MyParallaxBanner img={bannerAbout}/>
        <SectionTwo navID='features' slideDirection='slide-right'  openModal={openModal}/>
        <MyParallaxBanner img={bannerFeature}/>
        <SectionThree navID='nft' slideDirection='slide-left' openModal={openModal}/>
        <MyParallaxBanner img={bannerNFT}/>
        <SectionFour navID='projects' slideDirection='slide-left'  openModal={openModal}/>
        <MyParallaxBanner img={bannerProjects} aspectRatio='2 / 1'/>
      </ParallaxProvider>
      </div>
       ) :null}
      {show ? <PageRouter pageID={page} closePage={closePage}/>:null}
      <footer>
        <SocialBubbles />
        <p>©2022 GC. All rights reserved.</p></footer>
    </div>
  );
}

export default App;
