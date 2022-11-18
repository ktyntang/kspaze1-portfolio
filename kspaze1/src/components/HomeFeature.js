import React, {useState, useEffect} from 'react';
import {getSortedUrls, getImgCaptions} from '../utils/firebase'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import placeholder from '../assets/placeholderImg.jpg'
import '../App.css';

export default function HomeFeature({navID='',slideDirection='',openModal}) {
    const [featureImgList, setFeatureImgList] = useState([])
    const [featureCaptionList, setFeatureCaptionList] = useState([])
    
    
    useEffect(()=>{
        getSortedUrls('homeFeature').then(res=>setFeatureImgList(res))
        getImgCaptions('homeFeature').then(res=>setFeatureCaptionList(res))
    },[])
    
    const successfulImgFetch = featureImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    
    return (
        <div className="section" id={`${navID}`}>
            <div className="image carousel-container">
            {successfulImgFetch ? 
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                {featureImgList.map((image,i) => {
                        return (
            <div className='carousel-item'>
                    <img src={image} alt={`${image}`} ></img>
                <div className="overlay">
                    <div className="img-credit">{featureCaptionList[i]? `${featureCaptionList[i]}` : placeholderCaption }</div>
                </div>
            </div>)})}
            </Carousel>
             : <img src={placeholder} alt={'error loading images'} ></img> }
            
            </div>

            <div className="text left w-half">
                <div className={`text-container js-scroll ${slideDirection}`}>
                <div className='header-wrapper'>
                    <h1>FEATURES</h1>
                </div>
                <div className="body-wrapper">
                    <p>A few of my character works during my day in web2 were featured by eminent global artists. These works were non-commercial.</p>
                </div>
                <div className='button-wrapper icon-container'>
                    <FontAwesomeIcon className = "my-button more" icon={faChevronRight} onClick={(event)=>openModal(`page${navID}`)}/>
                </div>
                </div>
            </div>

          
        </div>
    );
}