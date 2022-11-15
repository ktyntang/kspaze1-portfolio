
import '../App.css';
import landingAbout from '../assets/About/landingAbout.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function SectionThree({navID='',slideDirection='',openModal}) {
 
    return (
        <div className="section" id={`${navID}`}>
            <div className="text left w-half">
                <div className={`text-container js-scroll ${slideDirection}`}>

                <div className='header-wrapper'>
                    <h1>NFT</h1>
                </div>
                <div className="body-wrapper">
                    <p>I started in the space with making fan arts for his favorite NFT projects as a collector. I got his first exposure as an NFT creator through a curated invitation to participate in Gamestop NFT marketplace as a launch artist. Making my debut with the HITCats art collection together with the first batch of creators for the marketplace launch in July 2022, I sold out my first NFT collection and I am motivated to improve my art skills in this space.</p>
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