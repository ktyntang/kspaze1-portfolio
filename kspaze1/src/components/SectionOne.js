import React, {useState, useEffect} from 'react';
import '../App.css';
import landingAbout from '../assets/About/landingAbout.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function SectionOne({navID='',slideDirection='',openModal}) {
 
    return (
        <div className="section" id={`${navID}`}>
            <div className="text left">
                <div className={`text-container js-scroll ${slideDirection}`}>

                <div className='header-wrapper'>
                    <h1>ABOUT</h1>
                </div>
                <div className="body-wrapper">
                    <p>I am Kspaze1, or K, a PhD-grad scientist with a
                    backstory in street art and street dance who loves to create
                    story-telling character arts. Coming from, and hugely
                    influenced by, two seemingly-opposite fields, I aim to
                    visualize the convergence of street culture, arts and
                    technology with through hand-drawn digital illustrations,
                    with the grand vision of pushing the frontiers of both
                    areas. Started with graffiti-character arts and superhero
                    fan arts in web2, I am now learning, and working towards
                    creating finer arts in the web3 space, while keeping that
                    raw and rebellious essence of street arts.</p>
                </div>
                <div className='button-wrapper icon-container'>
                    <FontAwesomeIcon className = "my-button more" icon={faChevronRight} onClick={(event)=>openModal(`page${navID}`)}/>
                </div>
                </div>
                </div>

            <div className="image">
                <img src={landingAbout} alt=""></img>
                <div className="overlay">
                    <div className="img-credit">By Jazpar Photography</div>
                </div>
            </div>
        </div>
    );
}