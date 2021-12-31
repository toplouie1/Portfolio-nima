import React from "react";
import "./Projects.css";
import calculator from "../images/calculator.png";
import youtube from "../images/youtubeClone.png";
import weather from "../images/weather.png";
import pixel from "../images/pixelPainter.png";

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
						This is a Youtube-clone that was done using{" "}
						<span className="descriptionSpan">React javascript</span>,
						Youtube-react. Had to use the Youtube-Api inorder to get the
						information . You will be able to search all youtube videos and its
						all so <span className="descriptionSpan">Responsive</span> .
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
						This is a Calculator App , That you will be able to do simple
						calclulation . It was done using
						<span className="descriptionSpan"> React JavaScrist</span>
					</p>
				</div>
				<div>
					<a href="https://nima-sherpa-calculator.netlify.app/" target="blank">
						<img className="imgs" src={calculator} alt="Calculater image" />
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
						<span className="descriptionSpan">-</span> Weather-App{" "}
						<span className="descriptionSpan">-</span>{" "}
					</h2>
					<p className="summaryP">
						This is a Weather-App where you will be able to search for Weather
						by inputing city/Country , It was made using
						<span className="descriptionSpan"> Vanilla JavaScript</span>
					</p>
				</div>
			</div>

			<div className="project">
				<div>
					<h2>
						<span className="descriptionSpan">-</span> Pixel-Painter{" "}
						<span className="descriptionSpan">-</span>{" "}
					</h2>
					<p className="summaryP leftSummary">
						Pixel Painter Website you will be able to draw choosing the color's
						you pick and delete / reset , It was made using{" "}
						<span className="descriptionSpan">Vanilla JavaScript</span>
					</p>
				</div>
				<div>
					<a href="https://toplouie1.github.io/8-0-events-lab/" target="blank">
						<img className="imgs" src={pixel} alt="pixel painter img " />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
