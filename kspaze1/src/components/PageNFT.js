import '../App.css';
// import Gallery from './Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function PageNFT({anim, toggleAnim, closePage}) {

    return (
        <div className='page' animation={anim} id='pageNFT' onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
        <div className="panel" >
                <div className={`text-container`}>

                <div className='header-wrapper'>
                    <h1>NFTs</h1>
                </div>
                <div className="body-wrapper">
                    <p>Coming Soon...</p>
                </div>
                </div>
                </div>
            {/* <div className='gallery'>
                <Gallery/>
            </div> */}
        <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>toggleAnim('animateOut')}/>
        </div>
        </div>
    );
}