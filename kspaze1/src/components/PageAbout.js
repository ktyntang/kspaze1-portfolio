export default function PageAbout({aboutPageImgList, aboutPageCaptionList,placeholder}) {

    const successfulCaptionFetch = aboutPageCaptionList.length
    const placeholderCaption = 'Artwork by Kspaze1'

    return (
        <div>
            <div className="panel" >
            <div className="text-container">
                    <div>
                        <h1>ABOUT</h1>
                    </div>

                <div className="body-wrapper">
                        
                    <div className='text-block'>
                        <div className='image left'>
                            <img src={aboutPageImgList?.[0] || placeholder} alt='me' width='100%' height='100%'></img>
                            <div className="overlay">
                                <div className="img-credit">{successfulCaptionFetch? `${aboutPageCaptionList[0]}` : placeholderCaption }</div>
                            </div>
                        </div>
                        <h3>My traits</h3>
                        <ul>
                            <li>BBC-featured tech founder, PhD in Chemistry & Nanomaterials, Singapore’s EDGE 35-under-35.</li>
                            <li>Character artist with works featured by eminent global musicians.</li>
                            <li>GamestopNFT’s launch artist.</li>
                            <li>Member of ARC Stellars – A curated invite-only web3 community.</li>
                            <li>Bboy at roots – The Bronx Boys Rocking Crew, Lords of Nanyang Crew, Flow with Life Crew, Ill Stack Squad.</li>
                        </ul>
                        </div>
                       
                    

                    <div className='text-block'>          
                            <div className='image right' style={{padding:'3em 0 0 0'}}>
                                <img src={aboutPageImgList?.[1] || placeholder} alt='me' width='100%' height='100%'></img>
                                <div className="overlay">
                                    <div className="img-credit">{successfulCaptionFetch? `${aboutPageCaptionList[1]}` : placeholderCaption }</div>
                                </div>
                            </div>
                        <h3>My journey to web3</h3>
                        <p>Born and raised on the streets of Saigon, Vietnam and spent the teenage years and adulthood in Singapore, I was fortunate to learn from the best in both environments. I learnt art at 5 years old and fell in love with the hip-hop culture through its art forms, namely hip-hop music, graffiti and breaking (bboying). 
                            These street arts, and hip-hop rescued me from the darkest days as a troubled kid. I danced and played music so often that I skipped school. My pursuit in bboying has taught me various life lessons. I joined The Bronx Boys Rocking Crew – an global OG bboy crew originated from USA, and won many dance competitions in Singapore and the region with my greatest friends. </p>
                        <p>The culture had also taught me the value of learning and contributing. I pursued a degree in Chemistry, and obtained a PhD in Chemistry from Nanyang Technological University, Singapore. I graduated with 2 Gold medals for Research Excellence and a patent, and I co-founded a deep-tech company to commercialize my research to combat COVID-19. The work has earned me Singapore’s EDGE 35-under-35 award and a feature on BBC and global media.</p>
                        <p>However, it was tough to run a company and do art. My time with art was significantly affected. As COVID-19 subsided, I decided to pursue art again. </p>
                        <p>This was also when I was invited as a launch artist for Gamestop NFT marketplace debut. I prepared the HITCats art collection and my proposal was approved by content team, alongside a licensed right to make a special 1/1 art with Gamestop Logo. I sold out the collection, amassing 24 ETH volume in 3 days. Subsequently, I did various collab NFT project with creators on Loopring Layer 2. </p>
                        <p>Nevertheless, I am motivated to take a bigger step to push my arts further, and venture towards the 1/1 art scene. I am bullish on the utility of NFT that authenticates artworks and builds a digital version of traditional art collecting. I was humbled by many great artists in the space and realized upskilling is necessary. </p>
                        </div>
                    <div className='text-block'> 
                     <h3>Art</h3>
                            <p>I am in the early days of developing my style, which I aim to grow into something iconic in a few years. I was heavily influenced by graffiti arts and traditional American tattoo art styles – which emphasizes bold lines, rawness and a little bit of rebel. Started with doing art for fun without any real motivation about originality or finesse, I am learning to push my own boundaries towards creating more valuable arts.</p>

                            <p>Instilling more thoughts in composition, colours, shadow play, story-telling while keeping the raw and rebellious essence of my street art roots is my goal. I am constantly working towards crafting more unique arts at the realm of mental activities and technologies – the areas that I am deeply passionate about.</p>
              
                </div>
                </div>
                </div>
                </div>
        </div>
    );
}