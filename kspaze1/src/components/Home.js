import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import homeBg from '../assets/homeBg.png'
import homeFg from '../assets/homeFg.png'
import '../App.css';
import './Landing.css'

export default function Home() {
   return(
         <ParallaxBanner className='home fade-in'>
            <img
                src={homeBg}
                alt="homeBg"
                loading="lazy"
              />           
            <img className='slideUp'
                src={homeFg}
                alt="homeBg"
                loading="lazy"
              />
           
            <ParallaxBannerLayer speed={-20}>              
                <h1 className='home-text'>
                  BEYOND
                  <br/>
                  THE VISUALS
               </h1>
            </ParallaxBannerLayer>

          </ParallaxBanner>

      );
    };



