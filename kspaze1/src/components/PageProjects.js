import Gallery from "./Gallery";

export default function PageProjects({
	projectsPageImgList,
	projectsPageCaptionList,
	placeholder,
}) {
	const successfulImgFetch = projectsPageImgList.length;
	const placeholderCaption = "Artwork by Kspaze1";

	return (
		<div id="pageProjects">
			<div className="panel">
				<div className="text-container">
					<div>
						<h1>PROJECTS</h1>
					</div>
					<div className="section">
						<div className="text left ">
							<div className="text-container">
								<div>
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
			{/* PageProjects is updated newest at top. e.g. img 71 shown before img 70 */}
			<div className="gallery">
				{successfulImgFetch ? (
					<Gallery
						images={projectsPageImgList.slice().reverse()}
						captions={projectsPageCaptionList.slice().reverse()}
					/>
				) : (
					<img src={placeholder} alt={placeholderCaption}></img>
				)}
			</div>
		</div>
	);
}
