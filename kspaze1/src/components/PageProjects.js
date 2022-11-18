import React, {useState, useEffect} from 'react';
import {getSortedUrls, getImgCaptions} from '../utils/firebase'
import Gallery from './Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import placeholder from '../assets/placeholderImg.jpg'
import '../App.css';


export default function PageProjects({anim, toggleAnim, closePage}) {
    const [projectsImgList, setProjectsImgList] = useState([])
    const [projectsCaptionList, setProjectsCaptionList] = useState([])
    
    useEffect(()=>{
        getSortedUrls('pageProjects').then(res=>setProjectsImgList(res))
        getImgCaptions('pageProjects').then(res=>setProjectsCaptionList(res))
    },[])
    
    const successfulImgFetch = projectsImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'

    
    return (
        <div className='page' animation={anim} id='pageProjects' onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
        <div className="panel" >
                <div className={`text-container`}>

                <div className='header-wrapper'>
                    <h1>PROJECTS</h1>
                </div>
                <div className="body-wrapper">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum a nostrum laudantium impedit labore commodi alias. Laborum, ut dolores omnis pariatur molestiae, rem dignissimos odit dolorum beatae iusto voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum a nostrum laudantium impedit labore commodi alias. Laborum, ut dolores omnis pariatur molestiae, rem dignissimos odit dolorum beatae iusto voluptatibus.</p>
                </div>
                </div>
                </div>
            <div className='gallery'>
                {successfulImgFetch ? 
                <Gallery images={projectsImgList} captions={projectsCaptionList}/> 
                : <img src={placeholder} alt={placeholderCaption}></img>
            }
            </div>
        <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>toggleAnim('animateOut')}/>
        </div>
        </div>
    );
}