import React, {useState, useEffect} from 'react';
import '../App.css';
import landingNFT from '../assets/Banners/bannerNFT.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function SectionTwo({navID='',slideDirection='',openModal}) {
    return (
        <div className="section" id={`${navID}`}>
            
            <div className="image">
            <img src={landingNFT} alt=""></img>
            <div className="overlay">
                <div className="img-credit">By Jazpar Photography</div>
            </div>
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