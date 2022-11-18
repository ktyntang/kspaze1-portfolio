import React, {useState} from 'react';
import '../App.css';
import PageAbout from './PageAbout';
import PageFeature from './PageFeature';
import PageNFT from './PageNFT';
import PageProjects from './PageProjects';



export default function PageRouter({pageID, closePage}) {
    const [anim, setAnim] = useState('animateIn');
    const toggleAnim =(display)=>{
        setAnim(display)
    }

    return (
    <div>
        {pageID === 'pageAbout'? <PageAbout closePage={closePage} anim={anim} toggleAnim={toggleAnim}/>:null}
        {pageID === 'pageFeature'? <PageFeature closePage={closePage} anim={anim} toggleAnim={toggleAnim}/>:null}
        {pageID === 'pageNFT'? <PageNFT closePage={closePage} anim={anim} toggleAnim={toggleAnim}/>:null}
        {pageID === 'pageProjects'? <PageProjects closePage={closePage} anim={anim} toggleAnim={toggleAnim}/>:null}
    </div>
    );
}