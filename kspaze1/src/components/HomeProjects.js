import React, {useState, useEffect} from 'react';
import {getSortedUrls, getImgCaptions} from '../utils/firebase'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import placeholder from '../assets/placeholderImg.jpg'
import '../App.css';


export default function HomeProjects({navID='',slideDirection='',openModal}) {
    const [projectsImgList, setProjectsImgList] = useState([])
    const [projectsCaptionList, setProjectsCaptionList] = useState([])
    
    
    useEffect(()=>{
        getSortedUrls('homeProjects').then(res=>setProjectsImgList(res))
        getImgCaptions('homeProjects').then(res=>setProjectsCaptionList(res))
    },[])
    
    const successfulImgFetch = projectsImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    
    return (
        <div className="section" id={`${navID}`}>
            
            <div className="image carousel-container">
            {successfulImgFetch ? 
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                {projectsImgList.map((image,i) => {
                        return (
            <div className='carousel-item'>
                    <img src={image} alt={`${image}`} ></img>
                <div className="overlay">
                    <div className="img-credit">{projectsCaptionList[i]? `${projectsCaptionList[i]}` : placeholderCaption }</div>
                </div>
            </div>)})}
            </Carousel>
             : <img src={placeholder} alt={'error loading images'} ></img> }
            
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