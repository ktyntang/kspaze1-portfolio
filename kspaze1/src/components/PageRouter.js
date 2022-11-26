import React, {useEffect, useState} from 'react';
import {getSortedUrls, getImgCaptions} from '../utils/firebase';
import PageAbout from './PageAbout';
import PageFeature from './PageFeature';
import PageNFT from './PageNFT';
import PageProjects from './PageProjects';
import '../App.css';


export default function PageRouter({pageID, closePage, placeholder}) {
    const [anim, setAnim] = useState('animateIn');

    const [aboutPageImgList, setAboutPageImgList] = useState([])
    const [aboutPageCaptionList, setAboutPageCaptionList] = useState([])
    const [featurePageImgList, setFeaturePageImgList] = useState([])
    const [featurePageCaptionList, setFeaturePageCaptionList] = useState([])
    const [NFTPageImgList, setNFTPageImgList] = useState([])
    const [NFTPageCaptionList, setNFTPageCaptionList] = useState([])
    const [projectsPageImgList, setProjectsPageImgList] = useState([])
    const [projectsPageCaptionList, setProjectsPageCaptionList] = useState([])

    useEffect(()=>{
        getSortedUrls('pageAbout').then(res=>setAboutPageImgList(res))
        getImgCaptions('pageAbout').then(res=>setAboutPageCaptionList(res))
        getSortedUrls('pageFeature').then(res=>setFeaturePageImgList(res))
        getImgCaptions('pageFeature').then(res=>setFeaturePageCaptionList(res))
        getSortedUrls('pageNFT').then(res=>setNFTPageImgList(res))
        getImgCaptions('pageNFT').then(res=>setNFTPageCaptionList(res))
        getSortedUrls('pageProjects').then(res=>setProjectsPageImgList(res))
        getImgCaptions('pageProjects').then(res=>setProjectsPageCaptionList(res))
    },[])

    const toggleAnim =(display)=>{
        setAnim(display)
    }

    return (
    <div>
        {pageID === 'pageAbout'? <PageAbout closePage={closePage} anim={anim} toggleAnim={toggleAnim} aboutPageImgList={aboutPageImgList} aboutPageCaptionList={aboutPageCaptionList} placeholder={placeholder}/>:null}
        {pageID === 'pageFeature'? <PageFeature closePage={closePage} anim={anim} toggleAnim={toggleAnim} featurePageImgList={featurePageImgList} featurePageCaptionList={featurePageCaptionList} placeholder={placeholder}/>:null}
        {pageID === 'pageNFT'? <PageNFT closePage={closePage} anim={anim} toggleAnim={toggleAnim} NFTPageImgList={NFTPageImgList} NFTPageCaptionList={NFTPageCaptionList} placeholder={placeholder}/>:null}
        {pageID === 'pageProjects'? <PageProjects closePage={closePage} anim={anim} toggleAnim={toggleAnim} projectsPageImgList={projectsPageImgList} projectsPageCaptionList={projectsPageCaptionList} placeholder={placeholder}/>:null}
    </div>
    );
} 