import MyParallaxBanner from './Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import HomeAbout from './HomeAbout'
import HomeFeature from './HomeFeature'
import HomeNFT from './HomeNFT'
import HomeProjects from './HomeProjects'


export default function Home({openModal,placeholder,bannerImgList, aboutImgList, aboutCaptionList, featureImgList, featureCaptionList, NFTImgList, NFTCaptionList, projectsImgList, projectsCaptionList}) {

  return (
      <ParallaxProvider>
        <HomeAbout navID='About' slideDirection='slide-left'  openModal={openModal} aboutImgList={aboutImgList} aboutCaptionList={aboutCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[0] ?? placeholder}/>
        <HomeFeature navID='Feature' slideDirection='slide-right'  openModal={openModal} featureImgList={featureImgList} featureCaptionList={featureCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[1] ?? placeholder}/>
        <HomeNFT navID='NFT' slideDirection='slide-left' openModal={openModal} NFTImgList={NFTImgList} NFTCaptionList={NFTCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[2] ?? placeholder}/>
        <HomeProjects navID='Projects' slideDirection='slide-left' openModal={openModal} projectsImgList={projectsImgList} projectsCaptionList={projectsCaptionList} placeholder={placeholder}/>
        <MyParallaxBanner img={bannerImgList[3] ?? placeholder} aspectRatio='2 / 1'/>
      </ParallaxProvider>
  );
}
