import Gallery from './Gallery';

export default function PageProjects({projectsPageImgList,projectsPageCaptionList, placeholder}) {
    
    const successfulImgFetch = projectsPageImgList.length
    const placeholderCaption = 'Artwork by Kspaze1'
    
    return (
        <div >
        <div className="panel" >
                <div className="text-container">
                    <div className='header-wrapper'>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="section" >
                    <div className="text left w-half" >
                        <div className='text-container'>
                            <div className='header-wrapper'>
                                <h3>My past web2 projects</h3>
                            </div>
                            <div className="body-wrapper">
                                <ul>
                                    <li>Music cover</li>
                                    <li>Character arts</li>
                                    <li>Branding </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <div className='gallery'>
                {successfulImgFetch ? 
                <Gallery images={projectsPageImgList} captions={projectsPageCaptionList}/> 
                : <img src={placeholder} alt={placeholderCaption}></img>
            }
            </div>
        </div>
    );
}