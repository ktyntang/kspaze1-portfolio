export default function PageAbout({
	aboutPageImgList,
	aboutPageCaptionList,
	placeholder,
}) {
	const successfulCaptionFetch = aboutPageCaptionList.length;
	const placeholderCaption = "Artwork by Kspaze1";

	return (
		<div>
			<div className="panel">
				<div className="text-container">
					<div>
						<h1>ABOUT</h1>
					</div>

					<div className="body-wrapper">
						<div className="text-block">
							<div className="image left">
								<img
									src={aboutPageImgList?.[0] || placeholder}
									alt="me"
									width="100%"
									height="100%"
								></img>
								<div className="overlay">
									<div className="img-credit">
										{successfulCaptionFetch
											? `${aboutPageCaptionList[0]}`
											: placeholderCaption}
									</div>
								</div>
							</div>
							<h3>My traits</h3>
							<ul>
								<li>
									BBC-featured tech founder, PhD in Chemistry
									& Nanomaterials, Singapore’s EDGE
									35-under-35.
								</li>
								<li>
									Character artist with works featured by
									eminent global musicians.
								</li>
								<li>GamestopNFT’s launch artist.</li>
								<li>
									Member of ARC Stellars – A curated
									invite-only web3 community.
								</li>
								<li>
									Bboy at roots – The Bronx Boys Rocking Crew,
									Lords of Nanyang Crew, Flow with Life Crew,
									Ill Stack Squad.
								</li>
							</ul>
						</div>

						<div className="text-block">
							<div
								className="image right"
								style={{ padding: "3em 0 0 0" }}
							>
								<img
									src={aboutPageImgList?.[1] || placeholder}
									alt="me"
									width="100%"
									height="100%"
								></img>
								<div className="overlay">
									<div className="img-credit">
										{successfulCaptionFetch
											? `${aboutPageCaptionList[1]}`
											: placeholderCaption}
									</div>
								</div>
							</div>
							<h3>My journey to web3</h3>
							<p>
								I was fortunate to spend my years in a
								combination of countries. I liked drawing since
								young, but didn't practice it until I had my
								first brush with the hip-hop culture in my
								teenage years. I love the culture for its art
								forms, namely hip-hop music, graffiti and
								breaking (bboying). These street arts, and
								hip-hop rescued me from the darkest days as a
								troubled kid. I danced and played music so often
								that I skipped school. My pursuit in bboying has
								taught me various life lessons. I traveled
								around to learn more about the art and competed
								often alongside my greatest friends.
							</p>
							<p>
								The culture had also taught me the value of
								learning and contributing. I pursued a degree in
								Chemistry, and obtained a PhD in Chemistry from
								Nanyang Technological University, Singapore. I
								graduated with a patent, and I co-founded a
								company to commercialize my research to combat
								COVID-19.
							</p>
							<p>
								However, it was tough to run a COVID-19
								operation during the pandemic and practice art.
								My time with art was significantly affected. As
								COVID-19 subsided, I decided to pursue art
								again.
							</p>
							<p>
								This was also when I was invited as a launch
								artist for Gamestop NFT marketplace debut. I
								prepared the HITCats art collection and my
								proposal was approved by content team, alongside
								a licensed right to make a special 1/1 art with
								Gamestop Logo. I was glad to see the collection
								- drawn with a theme of positivity (because I
								pretty much needed it myself) - sold out on the
								marketplace on the launch week with the total
								volume of 21 ETH. Subsequently, I did various
								collab NFT projects with creators on Loopring
								Layer 2 ecosystem.
							</p>
							<p>
								Nevertheless, I am motivated to take a bigger
								step to push my arts further. I am bullish on
								the utility of NFT that authenticates artworks
								and builds a digital version of traditional art
								collecting. I was humbled by many great artists
								in the space and realized upskilling is
								necessary.
							</p>
						</div>
						<div className="text-block">
							<h3>Art</h3>
							<p>
								I am in the early days of developing my style,
								which I hope to grow into something iconic in a
								few years. I was heavily influenced by graffiti
								arts and traditional American tattoo art styles
								– which emphasizes bold lines, rawness and a
								little bit of rebel. Started with doing art for
								fun without any real motivation about
								originality or finesse, I am learning to push my
								own boundaries towards creating more valuable
								arts.
							</p>
							<p>
								Instilling more thoughts in composition,
								colours, shadow play, story-telling while
								keeping the raw and rebellious essence of my
								street art roots is my goal. I am constantly
								working towards crafting more unique arts at the
								realm of mental activities and technologies –
								the areas that I am deeply passionate about.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
