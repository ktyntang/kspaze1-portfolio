import React, { useState, useEffect } from 'react';
import {getSortedUrls, getImgCaptions} from '../utils/firebase';
import MyParallaxBanner from './Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import HomeAbout from './HomeAbout'
import HomeFeature from './HomeFeature'
import HomeNFT from './HomeNFT'
import HomeProjects from './HomeProjects'


export default function Home({openModal,placeholder}) {
  const [bannerImgList, setBannerImgList] = useState([])
  const [aboutImgList, setAboutImgList] = useState([])
  const [aboutCaptionList, setAboutCaptionList] = useState([])
  const [featureImgList, setFeatureImgList] = useState([])
  const [featureCaptionList, setFeatureCaptionList] = useState([])
  const [NFTImgList, setNFTImgList] = useState([])
  const [NFTCaptionList, setNFTCaptionList] = useState([])
  const [projectsImgList, setProjectsImgList] = useState([])
  const [projectsCaptionList, setProjectsCaptionList] = useState([])

  useEffect(()=>{
    getSortedUrls('homeAbout').then(res=>setAboutImgList(res))
    getImgCaptions('homeAbout').then(res=>setAboutCaptionList(res))
    getSortedUrls('homeBanner').then(res=>setBannerImgList(res))
    getSortedUrls('homeFeature').then(res=>setFeatureImgList(res))
    getImgCaptions('homeFeature').then(res=>setFeatureCaptionList(res))
    getSortedUrls('homeNFT').then(res=>setNFTImgList(res))
    getImgCaptions('homeNFT').then(res=>setNFTCaptionList(res))
    getSortedUrls('homeProjects').then(res=>setProjectsImgList(res))
    getImgCaptions('homeProjects').then(res=>setProjectsCaptionList(res))
  },[])

  return (
      <ParallaxProvider>
        <HomeAbout navID='About' slideDirection='slide-left'  openModal={openModal} aboutImgList={aboutImgList} aboutCaptionList={aboutCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[0] ?? placeholder}/>
        <HomeFeature navID='Feature' slideDirection='slide-right'  openModal={openModal} featureImgList={featureImgList} featureCaptionList={featureCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[1] ?? placeholder}/>
        <HomeNFT navID='NFT' slideDirection='slide-left' openModal={openModal} NFTImgList={NFTImgList} NFTCaptionList={NFTCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[2] ?? placeholder}/>
        <HomeProjects navID='Projects' slideDirection='slide-left' openModal={openModal} projectsImgList={projectsImgList} projectsCaptionList={projectsCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[3] ?? placeholder} aspectRatio='2 / 1'/>
      </ParallaxProvider>
  );
}
