import React, {useState, useEffect, Suspense} from 'react';
import {getSortedUrls, getImgCaptions} from './utils/firebase'
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

function App() {
  const [enter, setEnter] = useState(false)
  const [page,setPage] = useState('landing')
  const [show, setShow] = useState(false);
  const [homeMainImgList, setHomeMainImgList] = useState([])
  const [bannerImgList, setBannerImgList] = useState([])
  const [aboutImgList, setAboutImgList] = useState([])
  const [aboutCaptionList, setAboutCaptionList] = useState([])
  const [featureImgList, setFeatureImgList] = useState([])
  const [featureCaptionList, setFeatureCaptionList] = useState([])
  const [NFTImgList, setNFTImgList] = useState([])
  const [NFTCaptionList, setNFTCaptionList] = useState([])
  const [projectsImgList, setProjectsImgList] = useState([])
  const [projectsCaptionList, setProjectsCaptionList] = useState([])
  const [aboutPageImgList, setAboutPageImgList] = useState([])
  const [aboutPageCaptionList, setAboutPageCaptionList] = useState([])
  const [featurePageImgList, setFeaturePageImgList] = useState([])
  const [featurePageCaptionList, setFeaturePageCaptionList] = useState([])
  const [NFTPageImgList, setNFTPageImgList] = useState([])
  const [NFTPageCaptionList, setNFTPageCaptionList] = useState([])
  const [projectsPageImgList, setProjectsPageImgList] = useState([])
  const [projectsPageCaptionList, setProjectsPageCaptionList] = useState([])

  useEffect(()=>{
    console.log('FETCH')
    getSortedUrls('homeMain').then(res=>setHomeMainImgList(res))
    getSortedUrls('homeAbout').then(res=>setAboutImgList(res))
    getImgCaptions('homeAbout').then(res=>setAboutCaptionList(res))
    getSortedUrls('homeBanner').then(res=>setBannerImgList(res))
    getSortedUrls('homeFeature').then(res=>setFeatureImgList(res))
    getImgCaptions('homeFeature').then(res=>setFeatureCaptionList(res))
    getSortedUrls('homeNFT').then(res=>setNFTImgList(res))
    getImgCaptions('homeNFT').then(res=>setNFTCaptionList(res))
    getSortedUrls('homeProjects').then(res=>setProjectsImgList(res))
    getImgCaptions('homeProjects').then(res=>setProjectsCaptionList(res))
    getSortedUrls('pageAbout').then(res=>setAboutPageImgList(res))
    getImgCaptions('pageAbout').then(res=>setAboutPageCaptionList(res))
    getSortedUrls('pageFeature').then(res=>setFeaturePageImgList(res))
    getImgCaptions('pageFeature').then(res=>setFeaturePageCaptionList(res))
    getSortedUrls('pageNFT').then(res=>setNFTPageImgList(res))
    getImgCaptions('pageNFT').then(res=>setNFTPageCaptionList(res))
    getSortedUrls('pageProjects').then(res=>setProjectsPageImgList(res))
    getImgCaptions('pageProjects').then(res=>setProjectsPageCaptionList(res))
    
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
      {!enter && <Landing toggleLanding={toggleLanding} />}
      {enter &&
      <div>
        <ParallaxProvider>
          <HomeMain homeMainImgList={homeMainImgList} placeholder={placeholder}/>
        </ParallaxProvider>
        <NavBar toggleLanding={toggleLanding} />
        <Suspense fallback={<Loading/>}>
          <Home 
          openModal={openModal} 
          bannerImgList={bannerImgList}
          aboutImgList={aboutImgList}
          aboutCaptionList={aboutCaptionList}
          featureImgList={featureImgList}
          featureCaptionList={featureCaptionList}
          NFTImgList={NFTImgList}
          NFTCaptionList={NFTCaptionList}
          projectsImgList={projectsImgList}
          projectsCaptionList={projectsCaptionList}
          placeholder={placeholder}
          />
        </Suspense>
      </div>}
      {show && 
      <Suspense fallback={<Loading/>}>
        <PageRouter pageID={page} closePage={closePage} placeholder={placeholder}
        aboutPageImgList={aboutPageImgList}
        aboutPageCaptionList={aboutPageCaptionList}
        featurePageImgList={featurePageImgList} 
        featurePageCaptionList={featurePageCaptionList} 
        NFTPageImgList={NFTPageImgList} 
        NFTPageCaptionList={NFTPageCaptionList} 
        projectsPageImgList={projectsPageImgList} 
        projectsPageCaptionList={projectsPageCaptionList}
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
