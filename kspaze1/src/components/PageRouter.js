import React, {useState} from 'react';
import PageAbout from './PageAbout';
import PageFeature from './PageFeature';
import PageNFT from './PageNFT';
import PageProjects from './PageProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function PageRouter({pageID, closePage, placeholder,aboutPageImgList,aboutPageCaptionList,featurePageImgList,featurePageCaptionList,NFTPageImgList,NFTPageCaptionList,projectsPageImgList,projectsPageCaptionList}) {
    const [anim, setAnim] = useState('animateIn');

    const toggleAnim =(display)=>{
        setAnim(display)
    }

    return (
    <div className='page' animation={anim} onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
        {pageID === 'pageAbout'? <PageAbout aboutPageImgList={aboutPageImgList} aboutPageCaptionList={aboutPageCaptionList} placeholder={placeholder}/>:null}
        {pageID === 'pageFeature'? <PageFeature featurePageImgList={featurePageImgList} featurePageCaptionList={featurePageCaptionList} placeholder={placeholder}/>:null}
        {pageID === 'pageNFT'? <PageNFT NFTPageImgList={NFTPageImgList} NFTPageCaptionList={NFTPageCaptionList} placeholder={placeholder}/>:null}
        {pageID === 'pageProjects'? <PageProjects projectsPageImgList={projectsPageImgList} projectsPageCaptionList={projectsPageCaptionList} placeholder={placeholder}/>:null}
        <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' 
            onClick={()=>toggleAnim('animateOut')}/>
        </div>
    </div>
    );
} 