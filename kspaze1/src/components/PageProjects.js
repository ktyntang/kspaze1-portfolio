import Gallery from './Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function PageProjects({anim, toggleAnim, closePage,projectsPageImgList,projectsPageCaptionList, placeholder}) {
    
    const successfulImgFetch = projectsPageImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    
    return (
        <div className='page' animation={anim} id='pageProjects' onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
        <div className="panel" >
                <div className="text-container">
                    <div className='header-wrapper'>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="section" >
                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>My past web2 projects</h3>
                            </div>
                            <div className="body-wrapper">
                                <ul>
                                    <li>Music cover</li>
                                    <li>Character arts</li>
                                    <li>Branding </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <div className='gallery'>
                {successfulImgFetch ? 
                <Gallery images={projectsPageImgList} captions={projectsPageCaptionList}/> 
                : <img src={placeholder} alt={placeholderCaption}></img>
            }
            </div>
        <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>toggleAnim('animateOut')}/>
        </div>
        </div>
    );
}