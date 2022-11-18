import './NavBar.css';
import './Landing.css'
import logo from '../assets/LOGO.png'

export default function NavBar({toggleLanding}) {
    return(
        <div className='navbar' id="top" style={{animation:'fadeIn ease 300ms'}}> 
        <div className='logo' onClick={()=>toggleLanding()}><img src={logo} alt='logo'></img></div>
            <ul className="nav-links">
                <li className="nav-item"><a href="#About">ABOUT</a></li>
                <li className="nav-item"><a href="#Feature">FEATURES</a></li>
                <li className="nav-item"><a href="#NFT">NFT</a></li>
                <li className="nav-item"><a href="#Projects">PROJECTS</a></li>
                <li className="nav-item"><a href="#Contact">CONTACT</a></li>
            </ul>
        </div>

    )
}