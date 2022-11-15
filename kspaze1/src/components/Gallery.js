import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRef } from "react";
import "./Gallery.css";
import testpic1 from "../assets/Landing/hover1.png";
import testpic2 from "../assets/Landing/hover2.png";
import testpic3 from "../assets/Landing/hover3.png";
import testpic10 from "../assets/Banners/bannerFeature.png";
import testpic11 from "../assets/Banners/bannerNFT.png";
import testpic12 from "../assets/Banners/bannerProjects.png";

export default function Gallery() {
   const gallery = useRef(null)

   const focusGallery =() =>{
      gallery.current.focus()}

   const images = [testpic10,testpic12,testpic3,testpic11,testpic1,testpic2,testpic3,testpic11,testpic10,testpic12,testpic3,testpic11]
    return (
        <div className="scroll-container" onLoad={()=>focusGallery()} ref={gallery}>
         <div className="gallery-container">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry columnsCount={3} gutter="10px">
                  {images.map(image => {
                     return (
                     <div className="image">
                        <img src={image} alt={`${image}`}></img>
                     <div className="overlay">
                    <div className="img-credit">{`${image}`}</div>
                </div>
                </div>)
                  })}
                </Masonry>
            </ResponsiveMasonry>
            </div>  </div>
    );
}
