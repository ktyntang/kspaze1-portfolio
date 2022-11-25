import React, {useState, useEffect, Suspense} from 'react';
import {getSortedUrls} from './utils/firebase'
import { ParallaxProvider } from 'react-scroll-parallax';
import Landing from './components/Landing';
import SocialBubbles from './components/SocialBubbles';
import './App.css';
import NavBar from './components/NavBar';
import HomeMain from './components/HomeMain';
import Loading from './components/Loading';
import placeholder from './assets/placeholderImg.webp'

const homePromise = import('./components/Home');
const Home = React.lazy(()=>homePromise)
const pagesPromise = import('./components/PageRouter');
const PageRouter = React.lazy(()=>pagesPromise)

//DONE
//move the useEffects into HomeMain and PageRouter

// memo-ize components e.g. Home not reliant on page state but is. does it play well with lazy?
//definitely memo-ize homeMain. it's rendering everytime page.

//discoveries: 
// domcontentload limited by bundle size.
// webp download queues after all the useEffect fetches. 
// even though fetchpriority high, and gets server response (1s) urls
// the webp downlaod still takes forever??

//cache control (6 month) unless change?




function App() {
  const [enter, setEnter] = useState(false)
  const [page,setPage] = useState('landing')
  const [show, setShow] = useState(false);
  const [landingImgList, setLandingImgList] = useState([])
  const [homeMainImgList, setHomeMainImgList] = useState([])

  useEffect(()=>{
    getSortedUrls('landing').then(res=>setLandingImgList(res)) 
    getSortedUrls('homeMain').then(res=>setHomeMainImgList(res))     
    },[])

  const toggleLanding = ()=>{setEnter((enter)=>!enter)}

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
      {!enter && <Landing toggleLanding={toggleLanding} landingImgList={landingImgList}/>}
      {enter &&
      <div>
        <ParallaxProvider>
          <HomeMain homeMainImgList={homeMainImgList} placeholder={placeholder}/>
        </ParallaxProvider>
        <NavBar toggleLanding={toggleLanding} />
        <Suspense fallback={<Loading/>}>
          <Home 
          openModal={openModal}
          placeholder={placeholder}
          />
        </Suspense>
      </div>}
      {show && 
      <Suspense fallback={<Loading/>}>
        <PageRouter pageID={page} closePage={closePage} placeholder={placeholder}
        />
      </Suspense>
      }
      <footer>
        <h1 style={{margin:'2rem 0 1rem 0', color:'rgb(75, 75, 75)'}}>Get In Touch</h1>
        <SocialBubbles/>
        <p>©2022 Kspaze1. All rights reserved.</p></footer>
    </div>
  );
}

export default App;
