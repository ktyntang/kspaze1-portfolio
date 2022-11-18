import React, {useState, useEffect} from 'react';
import {getSortedUrls, getImgCaptions} from '../utils/firebase'
import placeholder from '../assets/placeholderImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css'; 
export default function PageFeature({anim, toggleAnim, closePage}) {
    const [featureImgList, setFeatureImgList] = useState([])
    const [featureCaptionList, setFeatureCaptionList] = useState([])
    
    useEffect(()=>{
        getSortedUrls('pageFeature').then(res=>setFeatureImgList(res))
        getImgCaptions('pageFeature').then(res=>setFeatureCaptionList(res))
    },[])
    
    const successfulImgFetch = featureImgList.length
    const successfulCaptionFetch = featureCaptionList.length
    const placeholderCaption = 'Artwork by Kspaze1'

    return (
        <div className='page' animation={anim} id='pageFeature' onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
            <div className="panel" >
                <div className='text-container'>
                    <div className='header-wrapper'>
                        <h1>FEATURES</h1>
                    </div>
                </div>

                <div className="section" >
                <div className='image'>
                <img src={successfulImgFetch ? featureImgList[0] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featureCaptionList[0]}` : placeholderCaption }</div>
                </div>
                </div>

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>FEATURE 1</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>A few of my character works during my day in web2 were featured by eminent global artists. These works were non-commercial.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" >
                <div className='image'>
                <img src={successfulImgFetch ? featureImgList[1] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featureCaptionList[1]}` : placeholderCaption }</div>
                </div>
                </div>

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>FEATURE 2</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>A few of my character works during my day in web2 were featured by eminent global artists. These works were non-commercial.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" >
                <div className='image'>
                <img src={successfulImgFetch ? featureImgList[2] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featureCaptionList[2]}` : placeholderCaption }</div>
                </div>
                </div>

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>FEATURE 3</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>A few of my character works during my day in web2 were featured by eminent global artists. These works were non-commercial.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            
            <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>toggleAnim('animateOut')}/>
            </div>
        </div>
    );
}