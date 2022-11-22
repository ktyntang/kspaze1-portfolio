import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

export default function SectionOne({navID='',slideDirection='',openModal,aboutImgList,aboutCaptionList,placeholder}) {
    
    const successfulImgFetch = aboutImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    
    return (
        <div className="section" id={`${navID}`}>
            <div className="text left">
                <div className={`text-container js-scroll ${slideDirection}`}>

                <div className='header-wrapper'>
                    <h1 style={{cursor:'pointer'}} onClick={()=>openModal(`page${navID}`)}>
                        ABOUT</h1>
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
                <btn className='button-wrapper my-button more' onClick={()=>openModal(`page${navID}`)}>
                    More
                    <FontAwesomeIcon style={{marginLeft:'0.5rem'}} icon={faChevronRight}/>
                    <FontAwesomeIcon  icon={faChevronRight}/>
                    <FontAwesomeIcon  icon={faChevronRight}/>
                </btn>
                </div>
                </div>


            <div className='image carousel-container'>
            {successfulImgFetch ? 
                aboutImgList.map((image,i) => {
                        return (
            <div>
                    <img src={image} alt={`${image}`} ></img>
                <div className="overlay">
                    <div className="img-credit">{aboutCaptionList[i]? `${aboutCaptionList[i]}` : placeholderCaption }</div>
                </div>
            </div>)})            
             : <img src={placeholder} alt={'error loading images'} ></img> }
        </div>
        </div>
    );
}