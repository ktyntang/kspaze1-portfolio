import React, {useState, useEffect} from 'react';
import '../App.css';
import landingAbout from '../assets/About/landingAbout.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function SectionFour({navID='',slideDirection='',openModal}) {
    return (
        <div className="section" id={`${navID}`}>
            
            <div className="image">
            <img src={landingAbout} alt=""></img>
            <div className="overlay">
                <div className="img-credit">By Jazpar Photography</div>
            </div>
            </div>

            <div className="text left w-half">
                <div className={`text-container js-scroll ${slideDirection}`}>
                <div className='header-wrapper'>
                    <h1>PROJECTS</h1>
                </div>
                <div className="body-wrapper">
                    <p>My portfolio projects and commissions cover mash-up fan arts, music song/album animation covers, character design works, and some 3D sculpting and VR arts.</p>
                </div>
                <div className='button-wrapper icon-container'>
                    <FontAwesomeIcon className = "my-button more" icon={faChevronRight} onClick={(event)=>openModal(`page${navID}`)}/>
                </div>
                </div>
            </div>

          
        </div>
    );
}