import '../App.css';
import Gallery from './Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function PageNFT({anim,exitAnim,resetPageAnim}) {
    return (
        <div className='page' animation={anim} id='pagenft' onAnimationEnd={()=>{if(anim === 'animateOut') resetPageAnim()}}>
        <div className="panel" >
                <div className={`text-container`}>

                <div className='header-wrapper'>
                    <h1>NFTs</h1>
                </div>
                <div className="body-wrapper">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta aut fuga ducimus velit aliquid, ratione blanditiis quaerat, eaque magni obcaecati asperiores. Nihil odit minima perspiciatis? Eum, molestias quos. Vitae?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta aut fuga ducimus velit aliquid, ratione blanditiis quaerat, eaque magni obcaecati asperiores. Nihil odit minima perspiciatis? Eum, molestias quos. Vitae?</p>

                </div>
                </div>
                </div>
        <Gallery/>
        <div >
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>exitAnim()}/>
        </div>
        </div>
    );
}