import React, {useState} from 'react';
import PageAbout from './PageAbout';
import PageFeature from './PageFeature';
import PageNFT from './PageNFT';
import PageProjects from './PageProjects';
import '../App.css';


export default function PageRouter({pageID, closePage, aboutPageImgList, aboutPageCaptionList, featurePageImgList, featurePageCaptionList, NFTPageImgList, NFTPageCaptionList, projectsPageImgList, projectsPageCaptionList, placeholder}) {
    const [anim, setAnim] = useState('animateIn');
    
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