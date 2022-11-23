import text from '../assets/Landing/text.webp'
import background from '../assets/Landing/background.webp'
import foreground from '../assets/Landing/foreground.webp'
import hoverSpecial from '../assets/Landing/hoverSpecial.webp'
import hover1 from '../assets/Landing/hover1.webp'
import hover2 from '../assets/Landing/hover2.webp'
import hover3 from '../assets/Landing/hover3.webp'
import hover4 from '../assets/Landing/hover4.webp'
import hover5 from '../assets/Landing/hover5.webp'
import hover6 from '../assets/Landing/hover6.webp'
import hover7 from '../assets/Landing/hover7.webp'


import './Landing.css';
import { useState,useEffect } from 'react'
//mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, transparent 100%);


export default function Landing({toggleLanding}) {
   const [animationEnd,setAnimationEnd] = useState(false)
   const [classNameSpecial,setClassNameSpecial] = useState('')

   useEffect(()=>{
      if (animationEnd){
         const hoverDivs = document.querySelectorAll('.hover-show')
         hoverDivs.forEach(hoverDiv=>hoverDiv.style.pointerEvents = 'all')
         hoverDivs.forEach(hoverDiv=>hoverDiv.style.cursor = 'pointer')}
   },[animationEnd])

   const handleMouseEnter = (imgID) => {
      const img = document.querySelector(imgID)
      img.style.opacity = '1'
   }
   
   const handleMouseLeave = (imgID) => {
      const img = document.querySelector(imgID)
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
<div className='landing-container' onLoad = {()=>setAnimationEnd(false)}>
   <img className='fade-in' id="bg" alt='background' src={background}/>
   <img className='fade-in' id="text" alt='text' src={text}/>
   <img className='fade-in zoom' id="fg" alt='foreground' src={foreground} onAnimationEnd={()=>setAnimationEnd(true)}/>
   <div className='face'>
      <img className={classNameSpecial} id='hoverSpecial' alt='hoverSpecial' src={hoverSpecial} onAnimationEnd={()=>toggleLanding('home')}/>
   </div>
   <div className='overlay-container fade-in' id='hoverdelay' onClick={()=>{handleLandingClose()}}>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover1')} onMouseLeave={()=>handleMouseLeave('#hover1')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover2')} onMouseLeave={()=>handleMouseLeave('#hover2')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover3')} onMouseLeave={()=>handleMouseLeave('#hover3')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover4')} onMouseLeave={()=>handleMouseLeave('#hover4')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover5')} onMouseLeave={()=>handleMouseLeave('#hover5')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover6')} onMouseLeave={()=>handleMouseLeave('#hover6')}></div>
      <div className='hover-show' onMouseEnter={()=>handleMouseEnter('#hover7')} onMouseLeave={()=>handleMouseLeave('#hover7')}></div>
      <img className='hover-img' id='hover1' alt='hover1' src={hover1}/>
      <img className='hover-img' id='hover2' alt='hover2' src={hover2}/>
      <img className='hover-img' id='hover3' alt='hover3' src={hover3}/>
      <img className='hover-img' id='hover4' alt='hover4' src={hover4}/>
      <img className='hover-img' id='hover5' alt='hover5' src={hover5}/>
      <img className='hover-img' id='hover6' alt='hover6' src={hover6}/>
      <img className='hover-img' id='hover7' alt='hover7' src={hover7}/>
   </div>
   </div>
)
}