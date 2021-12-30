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
					<img src={youtube} alt="Youtube-clone-img" />
				</div>
				<div>
					<h2>Youtube-Clone</h2>
					<p>
						This is a Youtube-clone that is done by the member's below making
						use of the Youtube Api and the react-youtube.
					</p>
				</div>
			</div>

			<div className="project">
				<div>
					<h2>Calculator</h2>
					<p>
						This is a Youtube-clone that is done by the member's below making
						use of the Youtube Api and the react-youtube.
					</p>
				</div>
				<div>
					<img src={calculator} alt="Calculater image" />
				</div>
			</div>

			<div className="project">
				<div>
					<img src={weather} alt="Youtube-clone-img" />
				</div>
				<div>
					<h2>Weather-App</h2>
					<p>
						This is a Youtube-clone that is done by the member's below making
						use of the Youtube Api and the react-youtube.
					</p>
				</div>
			</div>

			<div className="project">
				<div>
					<h2>Pixel-Painter</h2>
					<p>
						This is a Youtube-clone that is done by the member's below making
						use of the Youtube Api and the react-youtube.
					</p>
				</div>
				<div>
					<img src={pixel} alt="Youtube-clone-img" />
				</div>
			</div>
		</div>
	);
}

export default Projects;
