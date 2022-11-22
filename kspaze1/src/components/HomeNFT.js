import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

export default function SectionThree({navID='',slideDirection='',openModal,NFTImgList,NFTCaptionList,placeholder}) {
    
    const successfulImgFetch = NFTImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    

    return (
        <div className="section" id={`${navID}`}>
            <div className="text left w-half">
                <div className={`text-container js-scroll ${slideDirection}`}>
                    <div className='header-wrapper'>
                    <h1 style={{cursor:'pointer'}} onClick={()=>openModal(`page${navID}`)}>
                            NFT</h1>
                    </div>
                    <div className="body-wrapper">
                        <p>I started in the space with making fan arts for his favorite NFT projects as a collector. I got his first exposure as an NFT creator through a curated invitation to participate in Gamestop NFT marketplace as a launch artist. Making my debut with the HITCats art collection together with the first batch of creators for the marketplace launch in July 2022, I sold out my first NFT collection and I am motivated to improve my art skills in this space.</p>
                    </div>
                    <btn className='button-wrapper my-button more' onClick={()=>openModal(`page${navID}`)}>
                    More
                    <FontAwesomeIcon style={{marginLeft:'0.5rem'}} icon={faChevronRight}/>
                    <FontAwesomeIcon  icon={faChevronRight}/>
                    <FontAwesomeIcon  icon={faChevronRight}/>
                </btn>
                </div>
            </div>

            <div className="image carousel-container">
            {successfulImgFetch ? 
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                {NFTImgList.map((image,i) => {
                        return (
            <div className='carousel-item'>
                    <img src={image} alt={`${image}`} ></img>
                <div className="overlay">
                    <div className="img-credit">{NFTCaptionList[i]? `${NFTCaptionList[i]}` : placeholderCaption }</div>
                </div>
            </div>)})}
            </Carousel>
             : <img src={placeholder} alt={'error loading images'} ></img> }
            
            </div>

        </div>
    );
}