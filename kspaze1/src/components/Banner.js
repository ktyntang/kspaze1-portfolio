import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';


export default function MyParallaxBanner({img,aspectRatio='3 / 1'}) {
    return(
            <ParallaxBanner className='banner' style={{ aspectRatio: `${aspectRatio}` }}>
            <ParallaxBannerLayer speed={-20}>
              <img
                src={img}
                alt="banner"
              />
            </ParallaxBannerLayer>
          </ParallaxBanner>
          );
}