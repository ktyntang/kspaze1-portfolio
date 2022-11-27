import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Landing.css'
import { useState } from 'react';

export default function HomeMain({homeMainImgList,placeholder}) {
  const [invert, setInvert] = useState(true)

    const slideUpFg =()=>{
      const fg = document.querySelector('#fg')
      fg.classList.add('slideUp')
      fg.classList.remove('fg-transparent')
    }

    return(
      <div>
           <ParallaxBanner className='home fade-in' style={{filter: `${invert? 'invert(0)':'invert(1)'}`}} onClick={()=>setInvert(!invert)}>
             <ParallaxBannerLayer opacity={[1, 0]} shouldAlwaysCompleteAnimation={true}>
                <img className='bg'
                    src={homeMainImgList?.[0]||placeholder}
                    alt="homeBg"
                  />      
              </ParallaxBannerLayer>

              <ParallaxBannerLayer  opacity={[1, 0]} shouldAlwaysCompleteAnimation={true}>    
              <img className='fg-transparent' id='fg' onLoad={()=>slideUpFg()} 
                  src={homeMainImgList?.[1]||placeholder}
                  alt="homeBg"
                />
              </ParallaxBannerLayer>  
              <ParallaxBannerLayer opacity={[0.8, -0.5]} speed={-10} shouldAlwaysCompleteAnimation={true} expanded={false}>     
                  <h1 className='offset homeMain-text' >
                    BEYOND
                    <br/>
                    THE VISUALS
                 </h1>
              </ParallaxBannerLayer>
              <ParallaxBannerLayer opacity={[1, -0.5]} shouldAlwaysCompleteAnimation={true}>
                <div id="scrollDownChevron">
                  <FontAwesomeIcon style={{animationDelay:'1.2s'}} className="bounceAlpha" icon={faChevronDown}/>
                  <FontAwesomeIcon style={{animationDelay:'1.1s'}} className="bounceAlpha" icon={faChevronDown}/>
                  <FontAwesomeIcon style={{animationDelay:'1s'}} className="bounceAlpha" icon={faChevronDown}/>
                </div>
            </ParallaxBannerLayer>
            </ParallaxBanner>
        </div>
        );
      };




