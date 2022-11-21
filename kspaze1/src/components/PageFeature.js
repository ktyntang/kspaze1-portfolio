import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css'; 
export default function PageFeature({anim, toggleAnim, closePage,featurePageImgList,featurePageCaptionList,placeholder}) {

    const successfulImgFetch = featurePageImgList.length
    const successfulCaptionFetch = featurePageCaptionList.length
    const placeholderCaption = 'Artwork by Kspaze1'

    return (
        <div className='page' animation={anim} id='pageFeature' onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
            <div className="panel" >
                <div className='text-container'>
                    <div className='header-wrapper'>
                        <h1>FEATURES</h1>
                    </div>
                </div>

                <div className="section alt" >
                    
                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>HITCATS Art collectibles on GamestopNFT </h3>
                            </div>
                            <div className="body-wrapper">
                                <p>
                                    The <a href="https://nft.gamestop.com/collection/Hitcats">HITCats series</a> is an art collection curated for the GamestopNFT marketplace launch in July 2022. HIT stands for ‘Hang In There' and the collection aims to spread positivity through art. The collection sold out within 3 days and was featured by Gamestop. Holders of the first generation will enjoy perks such as airdrops and holder-only raffles for new arts dropped on the marketplace. 
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className='image-cont'>
                    <div className='image'>
                        <img src={successfulImgFetch ? featurePageImgList[0] : placeholder} alt='me' width='100%' height='100%'></img>
                        <div className="overlay">
                            <div className="img-credit">{successfulCaptionFetch? `${featurePageCaptionList[0]}` : placeholderCaption }</div>
                        </div>
                    </div>

                    <div className='image'>
                        <img src={successfulImgFetch ? featurePageImgList[1] : placeholder} alt='me' width='100%' height='100%'></img>
                        <div className="overlay">
                            <div className="img-credit">{successfulCaptionFetch? `${featurePageCaptionList[1]}` : placeholderCaption }</div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="section alt">
                

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>Art for OneEarth and Gaelscoil fundraising</h3>
                            </div>
                            <div className="body-wrapper">
                        <p>The artwork co-created with artist <a href="https://twitter.com/gordi_artist">Gordiart</a> was sold out to fundraise for OneEarth climate fund and Gaelscoil project.
</p>
                          </div>
                        </div>
                    </div>
                    <div className='image'>
                <img src={successfulImgFetch ? featurePageImgList[2] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featurePageCaptionList[2]}` : placeholderCaption }</div>
                </div>
                </div>

                </div>

                <div className="section alt" >
                

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>Wu-Tang Clan's RZA Character Portrait Art</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>
                                At the start of the COVID-19 pandemic lockdown, I created this stylized artwork of Wu-Tang Clan's RZA as a character study. As a bboy, I listened and practiced to a lot of Wu-Tang Clan's music and was inspired to paint this. The work went through many iterations and the final version was featured by <a href='https://www.instagram.com/p/CALr4JSF1pD/'>RZA</a> on his social media. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                <img src={successfulImgFetch ? featurePageImgList[3] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featurePageCaptionList[3]}` : placeholderCaption }</div>
                </div>
                </div>
                </div>

                <div className="section alt" >
                

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>Adan Cruz Character Portrait Art</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>
                                I worked with <a href='https://www.instagram.com/adancruzmx/?hl=en'>Adan Cruz</a> for a customized stylized character work, which was used as the graphic for this merchandise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                <img src={successfulImgFetch ? featurePageImgList[4] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featurePageCaptionList[4]}` : placeholderCaption }</div>
                </div>
                </div>
                </div>

                <div className="section alt" >
                

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>Soytiet Character Portrait Art</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>
                                I love <a href='https://www.instagram.com/p/CHol1ZIr1ct/'>Soytiet</a> and did a portrait art of him, which was featured on his personal page. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='image'>
                <img src={successfulImgFetch ? featurePageImgList[5] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featurePageCaptionList[5]}` : placeholderCaption }</div>
                </div>
                </div>

                </div>

                <div className="section alt" >
                

                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>Hotboii Portrait Art</h3>
                            </div>
                            <div className="body-wrapper">
                                <p>
                                The character art of Hotboii was featured by <a href='https://www.instagram.com/p/CDN_eQhD9ag/'>100K MGMT</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                <img src={successfulImgFetch ? featurePageImgList[6] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${featurePageCaptionList[6]}` : placeholderCaption }</div>
                </div>
                </div>
                </div>
        </div>
            
            <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>toggleAnim('animateOut')}/>
            </div>
        </div>
    );
}