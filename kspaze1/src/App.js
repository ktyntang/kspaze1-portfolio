import React, {useState, useEffect} from 'react';
import {getSortedUrls} from './utils/firebase'
import Landing from './components/Landing';
import SocialBubbles from './components/SocialBubbles';
import HomeMain from './components/HomeMain';
import NavBar from './components/NavBar';
import StickyMenu from './components/StickyMenu';
import PageRouter from './components/PageRouter';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';


// responsive breaks under 480px?
// responsiveness overlap when short screen
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
    //disable scroll
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = () => window.scrollTo(0, scrollTop);
  }

  const closePage =() =>{
    setShow(false);
    //enable scroll
    window.onscroll = function() {};
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
      {enter ? 
      <div>
        <ParallaxProvider>
          <HomeMain/>
        </ParallaxProvider>
        <Home openModal={openModal} bannerImgList={bannerImgList}/>
        <NavBar toggleLanding={toggleLanding}/>
        <StickyMenu/>
      </div>
      :null}
      {show ? <PageRouter pageID={page} closePage={closePage}/>:null}
      <footer>
        <SocialBubbles/>
        <p>©2022 GC. All rights reserved.</p></footer>
    </div>
  );
}

export default App;
