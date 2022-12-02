import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function HomeFeature({navID='',slideDirection='',openModal,featureImgList,featureCaptionList,placeholder}) {
    
    const successfulImgFetch = featureImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    
    return (
        <div className="section" id={`${navID}`}>
            <div className="image carousel-container">
            {successfulImgFetch ? 
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                {featureImgList.map((image,i) => {
                        return (
            <div className='carousel-item' key={`${image.split('token=')[1]}`}>
                    <img src={image} alt={`${image}`} ></img>
                <div className="overlay">
                    <div className="img-credit">{featureCaptionList[i]? `${featureCaptionList[i]}` : placeholderCaption }</div>
                </div>
            </div>)})}
            </Carousel>
             : <img src={placeholder} alt={'error loading images'} ></img> }
            
            </div>

            <div className="text left ">
                <div className={`text-container js-scroll ${slideDirection}`}>
                <div>
                    <h1 onClick={()=>openModal(`page${navID}`)}>
                        FEATURES</h1>
                </div>
                <div className="body-wrapper">
                    <p>A few of my character works during my day in web2 were featured by eminent global artists. These works were non-commercial.</p>
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