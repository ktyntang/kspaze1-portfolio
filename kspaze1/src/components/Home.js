import React from 'react';
import MyParallaxBanner from './Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import placeholder from '../assets/placeholderImg.jpg'
import '../App.css';

const aboutPromise = import('./HomeAbout');
const HomeAbout = React.lazy(()=>aboutPromise)
const featurePromise = import('./HomeFeature');
const HomeFeature = React.lazy(()=>featurePromise)
const nftPromise = import('./HomeNFT');
const HomeNFT = React.lazy(()=>nftPromise)
const projectsPromise = import('./HomeProjects');
const HomeProjects = React.lazy(()=>projectsPromise)


export default function Home({openModal,bannerImgList}) {

  return (
      <ParallaxProvider>
        <HomeAbout navID='About'  slideDirection='slide-left'  openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[0] ?? placeholder}/>
        <HomeFeature navID='Feature' slideDirection='slide-right'  openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[1] ?? placeholder}/>
        <HomeNFT navID='NFT' slideDirection='slide-left' openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[2] ?? placeholder}/>
        <HomeProjects navID='Projects' slideDirection='slide-left' openModal={openModal}/>
        <MyParallaxBanner img={bannerImgList[3] ?? placeholder} aspectRatio='2 / 1'/>
      </ParallaxProvider>
  );
}
