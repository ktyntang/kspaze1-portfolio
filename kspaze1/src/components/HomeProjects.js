import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function HomeProjects({navID='',slideDirection='',openModal,projectsImgList,projectsCaptionList,placeholder}) {
       
    const successfulImgFetch = projectsImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    
    return (
        <div className="section" id={`${navID}`}>
            
            <div className="image carousel-container">
            {successfulImgFetch ? 
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                {projectsImgList.map((image,i) => {
                        return (
            <div className='carousel-item' key={`${image.split('token=')[1]}`}>
                    <img src={image} alt={`${image}`} ></img>
                <div className="overlay">
                    <div className="img-credit">{projectsCaptionList[i]? `${projectsCaptionList[i]}` : placeholderCaption }</div>
                </div>
            </div>)})}
            </Carousel>
             : <img src={placeholder} alt={'error loading images'} ></img> }
            
            </div>

            <div className="text left ">
                <div className={`text-container js-scroll ${slideDirection}`}>
                <div>
                    <h1 onClick={()=>openModal(`page${navID}`)}>
                    PROJECTS</h1>
                </div>
                <div className="body-wrapper">
                    <p>My portfolio projects and commissions cover mash-up fan arts, music song/album animation covers, character design works, and some 3D sculpting and VR arts.</p>
                </div>
                <button className='button-wrapper my-button more' onClick={()=>openModal(`page${navID}`)}>
                    More
                    <FontAwesomeIcon style={{marginLeft:'0.5rem'}} icon={faChevronRight}/>
                    <FontAwesomeIcon  icon={faChevronRight}/>
                    <FontAwesomeIcon  icon={faChevronRight}/>
                </button>
                </div>
            </div>

          
        </div>
    );
}