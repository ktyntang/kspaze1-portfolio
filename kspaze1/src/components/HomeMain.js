import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import homeBg from '../assets/homeBg.png'
import homeFg from '../assets/homeFg.png'
import '../App.css';
import './Landing.css'


export default function HomeMain() {
     return(
           <ParallaxBanner className='home fade-in'>
             <ParallaxBannerLayer opacity={[1, 0]} shouldAlwaysCompleteAnimation={true}>
                <img className='bg'
                    src={homeBg}
                    alt="homeBg"
                    loading="lazy"
                  />      
              </ParallaxBannerLayer>
              <ParallaxBannerLayer className='slideUp' opacity={[1, 0]} shouldAlwaysCompleteAnimation={true}>    
              <img
                  src={homeFg}
                  alt="homeBg"
                  loading="lazy"
                />
              </ParallaxBannerLayer>  
              <ParallaxBannerLayer opacity={[1, 0]} speed={-10} shouldAlwaysCompleteAnimation={true} expanded={false}>     
                  <h1 className='offset home-item' >
                    BEYOND
                    <br/>
                    THE VISUALS
                 </h1>
              </ParallaxBannerLayer>

            </ParallaxBanner>

        );
      };




