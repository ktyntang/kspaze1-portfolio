import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import "./Gallery.css";

export default function Gallery({ images, captions }) {
	const [selectedImg, setSelectedImg] = useState(null);
	const [zoomFill, setZoomFill] = useState("zoomFillIn");

	const closeImg = () => {
		setZoomFill("zoomFillOut");
	};
	const openImg = (image, i) => {
		setSelectedImg({ image: image, index: i });
	};

	const resetImg = () => {
		setSelectedImg(null);
		setZoomFill("zoomFillIn");
	};

	return (
		<div className="scroll-container">
			<div className="gallery-container">
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				>
					<Masonry columnsCount={3} gutter="10px">
						{images.map((image, i) => {
							return (
								<div
									className="image-container"
									onClick={() => openImg(image, i)}
									key={`${image.split("token=")[1]}`}
								>
									<img src={image} alt={`${image}`}></img>
									<div className="overlay"></div>
								</div>
							);
						})}
					</Masonry>
				</ResponsiveMasonry>
			</div>

			<div
				className="selected-image-container"
				style={{
					opacity: `${selectedImg ? "1" : "0"}`,
					pointerEvents: `${selectedImg ? "visible" : "none"}`,
				}}
			>
				<div
					className="selected-image"
					style={{ display: `${selectedImg ? "block" : "none"}` }}
					animation={zoomFill}
					onAnimationEnd={() => {
						if (zoomFill === "zoomFillOut") resetImg();
					}}
					onClick={() => closeImg()}
				>
					<img
						src={selectedImg ? selectedImg.image : null}
						alt={selectedImg ? `${selectedImg.image}` : null}
					></img>
					{/* PageProjects has different caption nesting from other pages */}
					<div className="img-credit">
						{selectedImg
							? `${captions[selectedImg.index].caption}`
							: null}
					</div>
				</div>
			</div>
		</div>
	);
}
