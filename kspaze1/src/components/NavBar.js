import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';
import './Landing.css'
import logo from '../assets/LOGO.svg'
import { useState } from 'react';
import StickyMenu from './StickyMenu';



export default function NavBar({toggleLanding}) {
    const [navExpanded, setNavExpanded] = useState(false)

    return(
        <div>
        <nav className='navbar' id="top" style={{animation:'fadeIn ease 300ms'}}> 
        <div className='logo' onClick={()=>toggleLanding()}><img src={logo} alt='logo'></img></div>
            <div className="icon-menu">
                <FontAwesomeIcon 
                className="my-button menu" 
                icon={faBars}
                onClick={()=>setNavExpanded(!navExpanded)}/>
            </div>
            <ul className= {navExpanded ? "nav-links expanded" : "nav-links"}>
                <li className="nav-item"><a href="#About">ABOUT</a></li>
                <li className="nav-item"><a href="#Feature">FEATURES</a></li>
                <li className="nav-item"><a href="#NFT">NFT</a></li>
                <li className="nav-item"><a href="#Projects">PROJECTS</a></li>
                <li className="nav-item"><a href="#Contact">CONTACT</a></li>
            </ul>
        </nav>
        <StickyMenu/>
        </div>

    

    )
}