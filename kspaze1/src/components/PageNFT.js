import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css'; 

export default function PageNFT({anim, toggleAnim, closePage,NFTPageImgList,NFTPageCaptionList,placeholder}) {

    const successfulImgFetch = NFTPageImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'

    return (
        <div className='page' animation={anim} id='pageNFT' onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
            <div className="panel" >
                <div className='text-container'>
                    <div className='header-wrapper'>
                        <h1>NFTS</h1>
                    </div>
                </div>

                <div className="section alt" >

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>1/1 Art NFTs</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>Coming soon...</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="section alt" >
                    <div className="text left w-half" >
                        <div className='text-container'>
                        <div className='header-wrapper'>
                                <h3>'Hang In There' Cats (HITCats) Art Collectibles </h3>
                            </div>
                            <div className="body-wrapper">
                                <p>Exclusive GamestopNFT Launch Collection</p>
                                <p>The 'Hang In There' Cats (HITCats) series is a special art project by Kspaze1 curated for the GamestopNFT marketplace launch in July 2022.</p>
                                <p>Twitter: <a href="https://twitter.com/HitcatsNFT">https://twitter.com/HitcatsNFT</a>
                                <br/>Discord: <a href="https://t.co/pvphfZUqCq">https://t.co/pvphfZUqCq</a></p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="section alt">
                
                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>HITCats: The First Drop – Card Collectibles</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>Collect here: <a href="https://nft.gamestop.com/collection/Hitcats">https://nft.gamestop.com/collection/Hitcats</a></p>
                          </div>
                        </div>
                    </div>

                    <div className="image carousel-container">
                    {successfulImgFetch ? 
                    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                        {NFTPageImgList.slice(0,8).map((image,i) => {
                                return (
                    <div className='carousel-item'>
                            <img src={image} alt={`${image}`} ></img>
                        <div className="overlay">
                            <div className="img-credit">{NFTPageCaptionList[i]? `${NFTPageCaptionList[i]}` : placeholderCaption }</div>
                        </div>
                    </div>)})}
                    </Carousel>
                    : <img src={placeholder} alt={'error loading images'} ></img> }
                    
                    </div>

                </div>


                <div className="section alt">
                
                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>HITCats: Dark Lights – The Sphynja Story (On-going series)</h3>
                            </div>
                            <div className="body-wrapper">
                            <p>Collect here: <a href="https://nft.gamestop.com/collection/hitcatsdarklights">https://nft.gamestop.com/collection/hitcatsdarklights</a></p>
</div>
                        </div>
                    </div>

                    <div className="image carousel-container">
                    {successfulImgFetch ? 
                    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                        {NFTPageImgList.slice(8,10).map((image,i) => {
                                return (
                    <div className='carousel-item'>
                            <img src={image} alt={`${image}`} ></img>
                        <div className="overlay">
                            <div className="img-credit">{NFTPageCaptionList[i]? `${NFTPageCaptionList[i]}` : placeholderCaption }</div>
                        </div>
                    </div>)})}
                    </Carousel>
                    : <img src={placeholder} alt={'error loading images'} ></img> }
                    
                    </div>
                </div>
       
        </div>
            
            <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>toggleAnim('animateOut')}/>
            </div>
        </div>
    );
}