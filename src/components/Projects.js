import React from "react";
import "./Projects.css";
import calculator from "../images/calculator.png";
import youtube from "../images/youtubeClone.png";
import weather from "../images/weather.png";
// import pixel from "../images/pixelPainter.png";
import Budget from "../images/budget.png";

function Projects() {
	return (
		<div id="projectsContainer">
			<h1 className="headingProjects">projécts</h1>

			<div className="project">
				<div>
					<a href="https://youtube-clonana.netlify.app/" target="blank">
						<img className="imgs" src={youtube} alt="Youtube-clone-img" />
					</a>
				</div>
				<div>
					<h2>
						<span className="descriptionSpan">-</span> Youtube-Clone{" "}
						<span className="descriptionSpan">-</span>
					</h2>
					<p className="summaryP">
						<span className="technologyTitle">Description</span> : This is a
						Youtube-clone , Had to use the Youtube-Api inorder to get the
						information . You will be able to search all youtube videos and its
						all so Responsive .
						<p>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react - Youtube-Api - Youtube-react .
						</p>
						<p>
							<a
								className="technologyTitle"
								href="https://github.com/toplouie1/youtube-clone"
								target="blank"
							>
								Code
							</a>
						</p>
					</p>
				</div>
			</div>

			<div className="project">
				<div>
					<h2>
						<span className="descriptionSpan">-</span> Budget App{" "}
						<span className="descriptionSpan">-</span>{" "}
					</h2>
					<p className="summaryP leftSummary">
						<span className="technologyTitle">Description</span> : This is a
						fullstack Budget App That helps you maintain your financial and keep
						track of your balance where you would be able to CRUD - Create -
						Read - Update - Delete
						<p>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react - Express - node .
						</p>
						<p>
							<a
								className="technologyTitle"
								href="https://github.com/toplouie1/Fe-Budget"
								target="blank"
							>
								Code
							</a>
						</p>
					</p>
				</div>
				<div>
					<a
						href="https://practical-meninsky-218376.netlify.app/transactions"
						target="blank"
					>
						<img className="imgs rightImg" src={Budget} alt="Calculater" />
					</a>
				</div>
			</div>

			<div className="project">
				<div>
					<a
						href="https://toplouie1.github.io/8-0-weather-app-project/"
						target="blank"
					>
						<img className="imgs" src={weather} alt="weather img" />
					</a>
				</div>
				<div>
					<h2>
						<span className="descriptionSpan">-</span> Weather-App
						<span className="descriptionSpan">-</span>
					</h2>
					<p className="summaryP">
						<span className="technologyTitle">Description</span> : This is a
						Weather-App where you will be able to search for Weather by inputing
						city/Country .
						<p>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript .
						</p>
						<a
							className="technologyTitle"
							href="https://github.com/toplouie1/8-0-weather-app-project"
							target="blank"
						>
							Code
						</a>
					</p>
				</div>
			</div>

			<div className="project">
				<div>
					<h2>
						<span className="descriptionSpan">-</span> Calculator{" "}
						<span className="descriptionSpan">-</span>{" "}
					</h2>
					<p className="summaryP leftSummary">
						<span className="technologyTitle">Description</span> : This is a
						Calculator App , That you will be able to do simple calclulation .
						<p>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react .
						</p>
						<a
							className="technologyTitle"
							href="https://github.com/toplouie1/FSW-React-Calculator"
							target="blank"
						>
							Code
						</a>
					</p>
				</div>
				<div>
					<a href="https://nima-sherpa-calculator.netlify.app/" target="blank">
						<img className="imgs rightImg" src={calculator} alt="Calculater" />
					</a>
				</div>
			</div>

			{/* <div className="project">
				<div>
					<h2>
						<span className="descriptionSpan">-</span> Pixel-Painter{" "}
						<span className="descriptionSpan">-</span>{" "}
					</h2>
					<p className="summaryP leftSummary">
						<span className="technologyTitle">Description</span> : Pixel Painter
						Website you will be able to draw choosing the color's you pick and
						delete / reset .
						<p>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript .
						</p>
					</p>
				</div>
				<div>
					<a href="https://toplouie1.github.io/8-0-events-lab/" target="blank">
						<img
							className="imgs rightImg"
							src={pixel}
							alt="pixel painter img "
						/>
					</a>
				</div>
			</div> */}
		</div>
	);
}

export default Projects;
