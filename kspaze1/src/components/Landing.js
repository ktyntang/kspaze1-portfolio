
import text from '../assets/Landing/text.png'
import background from '../assets/Landing/background.png'
import foreground from '../assets/Landing/foreground.png'
import hover1 from '../assets/Landing/hover1.png'
import hover2 from '../assets/Landing/hover2.png'
import hover3 from '../assets/Landing/hover3.png'
import hover4 from '../assets/Landing/hover4.png'
import hover5 from '../assets/Landing/hover5.png'
import hover6 from '../assets/Landing/hover6.png'
import hover7 from '../assets/Landing/hover7.png'
import hoverSpecial from '../assets/Landing/hoverSpecial.png'
import homeBg from '../assets/homeBg.png'

import './Landing.css';
import { useState } from 'react'

const handleMouseEnter = (imgID) => {
   const img = document.querySelector(imgID)
   img.style.opacity = '1'
}

const handleMouseLeave = (imgID) => {
   const img = document.querySelector(imgID)
   img.style.opacity = '0'
}


export default function Landing({handleRouteChange}) {
   const [classNameSpecial,setClassNameSpecial] = useState('')
   const handleLandingClose=()=>{
      const landingBg = document.querySelector('.landing-container')
      landingBg.style.backgroundColor='white'
      const overlaycontainer = document.querySelector('.overlay-container')
      overlaycontainer.style.opacity='0'
      const bgfg = [...document.querySelectorAll('.fade-in')]
      bgfg.map(img=>img.style.opacity='0')
      setClassNameSpecial('fade-in-out')
   }

   return(
<div className='landing-container'>
   <img className='fade-in' id="bg" alt='background' src={background}/>
   <img className='fade-in' id="text" alt='text' src={text}/>
   <img className='fade-in zoom' id="fg" alt='foreground' src={foreground}/>
   <div className='face'>
      <img className={classNameSpecial} id='hoverSpecial' alt='hoverSpecial' src={hoverSpecial} onAnimationEnd={()=>handleRouteChange('home')}/>
   </div>
   <div className='overlay-container fade-in' id='hoverdelay' onClick={()=>{handleLandingClose()}}>
      <p>Click anywhere to Enter</p>
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