import React from "react";
import "./Projects.css";
import calculator from "../images/calculator.png";
import youtube from "../images/youtubeClone.png";
import weather from "../images/weather.png";
import pixel from "../images/pixelPainter.png";

function Projects() {
	return (
		<div id="projectsContainer">
			<h1 className="headingProjects">Projects</h1>
			<div className="project">
				<div>
					<a href="https://youtube-clonana.netlify.app/" target="blank">
						<img src={youtube} alt="Youtube-clone-img" />
					</a>
				</div>
				<div>
					<h2>Youtube-Clone</h2>
					<p>
						This is a Youtube-clone that was done with few of other fellow had
						to make use of the Api , Youtube-react I was mostly Working on the
						UI/UX and helped on other places.
					</p>
				</div>
			</div>

			<div className="project">
				<div>
					<h2>Calculator</h2>
					<p>
						This is a Calculator App . It was made using react JS, I really had
						fun doing all the UI/UX .
					</p>
				</div>
				<div>
					<a href="https://nima-sherpa-calculator.netlify.app/" target="blank">
						<img src={calculator} alt="Calculater image" />
					</a>
				</div>
			</div>

			<div className="project">
				<div>
					<a
						href="https://toplouie1.github.io/8-0-weather-app-project/"
						target="blank"
					>
						<img src={weather} alt="weather img" />
					</a>
				</div>
				<div>
					<h2>Weather-App</h2>
					<p>
						This is a Weather-App where you will be able to search for Weather
						by inputing city/Country , It was made using Vanilla JavaScript
					</p>
				</div>
			</div>

			<div className="project">
				<div>
					<h2>Pixel-Painter</h2>
					<p>
						Pixel Painter Website that you will be able to draw choosing the
						color's you pick and delete / reset .
					</p>
				</div>
				<div>
					<a href="https://toplouie1.github.io/8-0-events-lab/" target="blank">
						<img src={pixel} alt="pixel painter img " />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
