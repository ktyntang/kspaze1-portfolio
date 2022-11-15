import './NavBar.css';
import './Landing.css'
import logo from '../assets/LOGO.png'

export default function NavBar() {
    return(
        <div className='navbar' id="navbar" style={{animation:'fadeIn ease 300ms'}}> 
        <div className='logo'><img src={logo} alt='logo'></img></div>
            <ul className="nav-links">
                <li className="nav-item"><a href="#about">ABOUT</a></li>
                <li className="nav-item"><a href="#features">FEATURES</a></li>
                <li className="nav-item"><a href="#nft">NFT</a></li>
                <li className="nav-item"><a href="#projects">PROJECTS</a></li>
                <li className="nav-item"><a href="#contact">CONTACT</a></li>
            </ul>
        </div>

    )
}