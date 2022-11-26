import './Landing.css';
import { useState,useEffect } from 'react'
//mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, transparent 100%);


export default function Landing({toggleLanding,landingImgList}) {
   const [animationEnd,setAnimationEnd] = useState(false)
   const [classNameSpecial,setClassNameSpecial] = useState('')

   useEffect(()=>{
      if (animationEnd){
         const hoverDivs = document.querySelectorAll('.hover-show')
         hoverDivs.forEach(hoverDiv=>hoverDiv.style.pointerEvents = 'all')
         hoverDivs.forEach(hoverDiv=>hoverDiv.style.cursor = 'pointer')}
   },[animationEnd])


   function removeLoadingClass() {
      const introAnim = document.querySelector(".introAnim");
      introAnim.classList.remove('js-loading');
   }

   const handleMouseEnter = (imgID) => {
      const img = document.querySelector(imgID)
      img.style.opacity = '1'
   }
   
   const handleMouseLeave = (imgID) => {
      const img = document.querySelector(imgID)
      console.log(img.complete)
      img.style.opacity = '0'
   }
   
   const handleLandingClose=()=>{
        if (animationEnd){
         const landingBg = document.querySelector('.landing-container')
         landingBg.style.backgroundColor='white'
         const overlaycontainer = document.querySelector('.overlay-container')
         overlaycontainer.style.opacity='0'
         const bgfg = [...document.querySelectorAll('.fade-in')]
         bgfg.map(img=>img.style.opacity='0')
         setClassNameSpecial('fade-in-out')}
         window.scrollTo(0, 0)
   }

   return(

<div className='landing-container'>
   <div className='introAnim js-loading'>
      <img fetchpriority="high" className='fade-in' id="bg" alt='background' src={landingImgList?.[1]}/>
      <img fetchpriority="high" className='fade-in' id="text" alt='text' src={landingImgList?.[0]}/>
      <img onLoad={()=>removeLoadingClass()} fetchpriority="high" className='fade-in zoom' id="fg" alt='foreground' src={landingImgList?.[2]} onAnimationEnd={()=>setAnimationEnd(true)}/>
   </div>
   <div className='face'>
      <img fetchpriority="high" className={classNameSpecial} id='hoverSpecial' alt='hoverSpecial' src={landingImgList?.[10]} onAnimationEnd={()=>toggleLanding('home')}/>
   </div>
   <div className='overlay-container fade-in' id='hoverdelay' onClick={()=>{handleLandingClose()}}>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover1')} onMouseLeave={()=>handleMouseLeave('#hover1')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover2')} onMouseLeave={()=>handleMouseLeave('#hover2')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover3')} onMouseLeave={()=>handleMouseLeave('#hover3')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover4')} onMouseLeave={()=>handleMouseLeave('#hover4')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover5')} onMouseLeave={()=>handleMouseLeave('#hover5')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover6')} onMouseLeave={()=>handleMouseLeave('#hover6')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover7')} onMouseLeave={()=>handleMouseLeave('#hover7')}></div>
      <img fetchpriority="high" className='hover-img' id='hover1' alt='hover1' src={landingImgList?.[3]}/>
      <img fetchpriority="high" className='hover-img' id='hover2' alt='hover2' src={landingImgList?.[4]}/>
      <img fetchpriority="high" className='hover-img' id='hover3' alt='hover3' src={landingImgList?.[5]}/>
      <img fetchpriority="high" className='hover-img' id='hover4' alt='hover4' src={landingImgList?.[6]}/>
      <img fetchpriority="high" className='hover-img' id='hover5' alt='hover5' src={landingImgList?.[7]}/>
      <img fetchpriority="high" className='hover-img' id='hover6' alt='hover6' src={landingImgList?.[8]}/>
      <img fetchpriority="high" className='hover-img' id='hover7' alt='hover7' src={landingImgList?.[9]}/>
   </div>
   </div>
)
}

