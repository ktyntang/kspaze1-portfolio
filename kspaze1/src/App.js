import React, { useState, useEffect, Suspense, useMemo } from "react";
import { getSortedUrls, getImgCaptions } from "./utils/firebase";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
import Loading from "./components/Loading";
import placeholder from "./assets/placeholderImg.webp";

const SocialBubbles = React.lazy(() => import("./components/SocialBubbles"));
const homePromise = import("./components/Home");
const Home = React.lazy(() => homePromise);
const pagesPromise = import("./components/PageRouter");
const PageRouter = React.lazy(() => pagesPromise);

// FUTURE IMPROVEMENTS
// srcset 1px imgs for mobile.

function App() {
	const [enter, setEnter] = useState(false);
	const [page, setPage] = useState("landing");
	const [show, setShow] = useState(false);
	const [landingImgList, setLandingImgList] = useState([]);
	const [homeMainImgList, setHomeMainImgList] = useState([]);
	const [homeEntered, setHomeEntered] = useState(false);

	useEffect(() => {
		getSortedUrls("landing").then((res) => setLandingImgList(res));
		getSortedUrls("homeMain").then((res) => setHomeMainImgList(res));
	}, []);

	const [bannerImgList, setBannerImgList] = useState([]);
	const [aboutImgList, setAboutImgList] = useState([]);
	const [aboutCaptionList, setAboutCaptionList] = useState([]);
	const [featureImgList, setFeatureImgList] = useState([]);
	const [featureCaptionList, setFeatureCaptionList] = useState([]);
	const [NFTImgList, setNFTImgList] = useState([]);
	const [NFTCaptionList, setNFTCaptionList] = useState([]);
	const [projectsImgList, setProjectsImgList] = useState([]);
	const [projectsCaptionList, setProjectsCaptionList] = useState([]);
	const [aboutPageImgList, setAboutPageImgList] = useState([]);
	const [aboutPageCaptionList, setAboutPageCaptionList] = useState([]);
	const [featurePageImgList, setFeaturePageImgList] = useState([]);
	const [featurePageCaptionList, setFeaturePageCaptionList] = useState([]);
	const [NFTPageImgList, setNFTPageImgList] = useState({});
	const [NFTPageCaptionList, setNFTPageCaptionList] = useState([]);
	const [projectsPageImgList, setProjectsPageImgList] = useState([]);
	const [projectsPageCaptionList, setProjectsPageCaptionList] = useState([]);

	useEffect(() => {
		if (homeEntered) {
			getSortedUrls("homeAbout").then((res) => setAboutImgList(res));
			getImgCaptions("homeAbout").then((res) => setAboutCaptionList(res));
			getSortedUrls("homeBanner").then((res) => setBannerImgList(res));
			getSortedUrls("homeFeature").then((res) => setFeatureImgList(res));
			getImgCaptions("homeFeature").then((res) =>
				setFeatureCaptionList(res)
			);
			getSortedUrls("homeNFT").then((res) => setNFTImgList(res));
			getImgCaptions("homeNFT").then((res) => setNFTCaptionList(res));
			getSortedUrls("homeProjects").then((res) =>
				setProjectsImgList(res)
			);
			getImgCaptions("homeProjects").then((res) =>
				setProjectsCaptionList(res)
			);
			getSortedUrls("pageAbout").then((res) => setAboutPageImgList(res));
			getImgCaptions("pageAbout").then((res) =>
				setAboutPageCaptionList(res)
			);
			getSortedUrls("pageFeature").then((res) =>
				setFeaturePageImgList(res)
			);
			getImgCaptions("pageFeature").then((res) =>
				setFeaturePageCaptionList(res)
			);
			getSortedUrls("pageNFT/pageNFT1").then((res) =>
				setNFTPageImgList((NFTPageImgList) => ({
					...NFTPageImgList,
					a: res,
				}))
			);
			getSortedUrls("pageNFT/pageNFT2").then((res) =>
				setNFTPageImgList((NFTPageImgList) => ({
					...NFTPageImgList,
					b: res,
				}))
			);
			getImgCaptions("pageNFT1").then((res) =>
				setNFTPageCaptionList((NFTPageCaptionList) => ({
					...NFTPageCaptionList,
					a: res,
				}))
			);
			getImgCaptions("pageNFT2").then((res) =>
				setNFTPageCaptionList((NFTPageCaptionList) => ({
					...NFTPageCaptionList,
					b: res,
				}))
			);
			getSortedUrls("pageProjects").then((res) =>
				setProjectsPageImgList(res)
			);
			getImgCaptions("pageProjects").then((res) =>
				setProjectsPageCaptionList(res)
			);
		}
	}, [homeEntered]);

	const toggleLanding = () => {
		setEnter((enter) => !enter);
		setHomeEntered(true);
	};

	const openModal = (pageID) => {
		setShow(true);
		setPage(pageID);
		//disable scroll
		let scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		window.onscroll = () => window.scrollTo(0, scrollTop);
	};

	const closePage = () => {
		setShow(false);
		//enable scroll
		window.onscroll = function () {};
	};

	function handleScrollSlide() {
		var reveals = document.querySelectorAll(".js-scroll");

		for (let i = 0; i < reveals.length; i++) {
			const windowHeight = window.innerHeight;
			let elementTop = reveals[i].getBoundingClientRect().top;
			const elementVisible = 50;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("scrolled");
			} else {
				reveals[i].classList.remove("scrolled");
			}
		}
	}
	window.addEventListener("scroll", handleScrollSlide);

	const homeMainMemo = useMemo(
		() => (
			<HomeMain
				homeMainImgList={homeMainImgList}
				placeholder={placeholder}
			/>
		),
		[homeMainImgList]
	);

	return (
		<div className="App">
			{!enter && (
				<Landing
					toggleLanding={toggleLanding}
					landingImgList={landingImgList}
				/>
			)}
			{enter && (
				<div>
					<ParallaxProvider>{homeMainMemo}</ParallaxProvider>
					<NavBar toggleLanding={toggleLanding} />
					<Suspense fallback={<Loading />}>
						<Home
							openModal={openModal}
							placeholder={placeholder}
							bannerImgList={bannerImgList}
							aboutImgList={aboutImgList}
							aboutCaptionList={aboutCaptionList}
							featureImgList={featureImgList}
							featureCaptionList={featureCaptionList}
							NFTImgList={NFTImgList}
							NFTCaptionList={NFTCaptionList}
							projectsImgList={projectsImgList}
							projectsCaptionList={projectsCaptionList}
						/>
					</Suspense>
				</div>
			)}
			{show && (
				<Suspense fallback={<Loading />}>
					<PageRouter
						pageID={page}
						closePage={closePage}
						placeholder={placeholder}
						aboutPageImgList={aboutPageImgList}
						aboutPageCaptionList={aboutPageCaptionList}
						featurePageImgList={featurePageImgList}
						featurePageCaptionList={featurePageCaptionList}
						NFTPageImgList={NFTPageImgList}
						NFTPageCaptionList={NFTPageCaptionList}
						projectsPageImgList={projectsPageImgList}
						projectsPageCaptionList={projectsPageCaptionList}
					/>
				</Suspense>
			)}
			<footer>
				<h1>Get In Touch</h1>
				<Suspense fallback={<p></p>}>
					<SocialBubbles />
				</Suspense>
				<p>©2022 Kspaze1. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default App;
