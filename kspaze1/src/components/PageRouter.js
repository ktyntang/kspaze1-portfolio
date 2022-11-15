import React, {useState} from 'react';
import '../App.css';
import PageNFT from './PageNFT';



export default function PageRouter({pageID, closePage}) {
    const [anim, setAnim] = useState('animateIn');
    const toggleAnim =(display)=>{
        setAnim(display)
    }

    return (
    <div>
        {pageID === 'pagenft'? <PageNFT closePage={closePage} anim={anim} toggleAnim={toggleAnim}/>:null}
    </div>
    );
}