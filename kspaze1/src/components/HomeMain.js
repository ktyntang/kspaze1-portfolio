import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import '../App.css';
import './Landing.css'

export default function HomeMain({homeMainImgList,placeholder}) {
  
  const successfulImgFetch = homeMainImgList.length

     return(
           <ParallaxBanner className='home fade-in'>
             <ParallaxBannerLayer opacity={[1, 0]} shouldAlwaysCompleteAnimation={true}>
                <img className='bg'
                    src={successfulImgFetch? homeMainImgList[0]:placeholder}
                    alt="homeBg"
                    loading="lazy"
                  />      
              </ParallaxBannerLayer>
              <ParallaxBannerLayer className='slideUp' opacity={[1, 0]} shouldAlwaysCompleteAnimation={true}>    
              <img
                  src={successfulImgFetch? homeMainImgList[1]:placeholder}
                  alt="homeBg"
                  loading="lazy"
                />
              </ParallaxBannerLayer>  
              <ParallaxBannerLayer opacity={[1, -0.5]} speed={-10} shouldAlwaysCompleteAnimation={true} expanded={false}>     
                  <h1 className='offset home-item' >
                    BEYOND
                    <br/>
                    THE VISUALS
                 </h1>
              </ParallaxBannerLayer>

            </ParallaxBanner>

        );
      };




