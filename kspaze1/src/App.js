import React, {useState, useEffect, Suspense, useMemo} from 'react';
import {getSortedUrls} from './utils/firebase'
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Landing from './components/Landing';
import SocialBubbles from './components/SocialBubbles';
import NavBar from './components/NavBar';
import HomeMain from './components/HomeMain';
import Loading from './components/Loading';
import placeholder from './assets/placeholderImg.webp'

const homePromise = import('./components/Home');
const Home = React.lazy(()=>homePromise)
const pagesPromise = import('./components/PageRouter');
const PageRouter = React.lazy(()=>pagesPromise)

//DONE
//
// move fontface into index.css to trigger faster
//inline styles to css
//Memo-ize homeMain to prevent re-render everytime page is opened.



//srcset the imgs for mobile
// img srcset 1pixel for mobile for landing4-10
// add loading
// unnecessary fetching! useEffect runs everytime page router is called.
//what i want: ImgFetcher fetch once, update state,
// pass state to child <PageRouter/>
//<imgFetcher>
//<PageRouter pageID={page} closePage={closePage} placeholder={placeholder}/>
//</imageFetcher>
//REWRITER PageROUTER!


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

  const homeMainMemo = useMemo(() => <HomeMain homeMainImgList={homeMainImgList} placeholder={placeholder}/>, [homeMainImgList]);


  return (
    <div className="App">
      {!enter && <Landing toggleLanding={toggleLanding} landingImgList={landingImgList}/>}
      {enter &&
      <div>
        <ParallaxProvider>
         {homeMainMemo}
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
        <h1>Get In Touch</h1>
        <SocialBubbles/>
        <p>©2022 Kspaze1. All rights reserved.</p></footer>
    </div>
  );
}

export default App;
