import React from "react";
import "./Projects.css";
import calculator from "../images/calculator.png";
import youtube from "../images/youtubeClone.png";
// import weather from "../images/weather.png";
// import pixel from "../images/pixelPainter.png";
// import Budget from "../images/budget.png";
import eduk from "../images/eduk.png";
import Watch from "../images/watches.png";

function Projects() {
	return (
		<div id="projectsContainer">
			<h1 className="headingProjects">projécts</h1>

			<div className="project">
				<div>
					<a href="https://eduk.netlify.app/" target="blank">
						<img className="imgs" src={eduk} alt="eduk-App" />
					</a>
				</div>
				<div className="discriptionContainer">
					<div className="summaryP">
						<h2>
							<span className="descriptionSpan">-</span> EDUK{" "}
							<span className="descriptionSpan">-</span>
						</h2>
						<span className="technologyTitle">Description</span> : EDUK goal is
						to connect high school, college students, minorities and residents
						of underserved communities with resources they can't get elsewhere.
						Whether it's be career skills , scholarships , grants, continued
						learning, programs, etc., we want to bridge the the knowledge gap
						within these underserved communities.
						<div>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react - express - boot-strap , multer,
							bcrypt material Ui , Postgress , axios
						</div>
						<p>
							<a
								className="technologyTitle"
								href="https://github.com/TheodoreBFrazier/NYC-Rose-App"
								target="blank"
							>
								Code
							</a>
						</p>
					</div>
				</div>
			</div>

			<div className="project">
				<div>
					<a href="https://musing-euler-08cdda.netlify.app/" target="blank">
						<img className="imgs" src={Watch} alt="Watch-Store-img" />
					</a>
				</div>
				<div className="discriptionContainer">
					<div className="summaryP">
						<h2>
							<span className="descriptionSpan">-</span> Watch-Store{" "}
							<span className="descriptionSpan">-</span>
						</h2>
						<span className="technologyTitle">Description</span> : This is a
						fullstack ecommerce store for watches , that has the CRUD
						functionality , you recieve the information from Postgres then its
						manipulated and shown on the page
						<div>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react - express - react-three-fiber ,
							material Ui , Postgress
						</div>
						<p>
							<a
								className="technologyTitle"
								href="https://github.com/toplouie1/nima-final-project"
								target="blank"
							>
								Code
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="project">
				<div>
					<a href="https://youtube-clonana.netlify.app/" target="blank">
						<img className="imgs" src={youtube} alt="Youtube-clone-img" />
					</a>
				</div>
				<div className="discriptionContainer">
					<div className="summaryP">
						<h2>
							<span className="descriptionSpan">-</span> Youtube-Clone{" "}
							<span className="descriptionSpan">-</span>
						</h2>
						<span className="technologyTitle">Description</span> : This is a
						Youtube-clone , I Had to use the Youtube-Api inorder to get the
						information . You will be able to search all youtube videos and its
						all so Responsive .
						<div>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react - Youtube-Api - Youtube-react .
						</div>
						<p>
							<a
								className="technologyTitle"
								href="https://github.com/toplouie1/youtube-clone"
								target="blank"
							>
								Code
							</a>
						</p>
					</div>
				</div>
			</div>

			{/* <div className="project">
				<div>
					<a
						href="https://practical-meninsky-218376.netlify.app"
						target="blank"
					>
						<img className="imgs rightImg" src={Budget} alt="Calculater" />
					</a>
				</div>
				<div className="discriptionContainer">
					<div className="summaryP ">
						<h2>
							<span className="descriptionSpan">-</span> Budget App{" "}
							<span className="descriptionSpan">-</span>{" "}
						</h2>
						<span className="technologyTitle">Description</span> : This is a
						fullstack Budget App That helps you maintain your financial and keep
						track of your balance . It has functionality such as CRUD
						<div>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react - Express - Postgress
						</div>
						<p>
							<a
								className="technologyTitle"
								href="https://github.com/toplouie1/Fe-Budget"
								target="blank"
							>
								Code
							</a>
						</p>
					</div>
				</div>
			</div> */}

			<div className="project">
				<div>
					<a href="https://nima-sherpa-calculator.netlify.app/" target="blank">
						<img className="imgs rightImg" src={calculator} alt="Calculater" />
					</a>
				</div>
				<div className="discriptionContainer">
					<div className="summaryP">
						<h2>
							<span className="descriptionSpan">-</span> Calculator{" "}
							<span className="descriptionSpan">-</span>{" "}
						</h2>
						<span className="technologyTitle">Description</span> : This is a
						Calculator App , That you will be able to do simple calclulation .
						<div>
							<span className="technologyTitle">Technology Utilized</span> :
							Html - Css - javascript - react .
						</div>
						<a
							className="technologyTitle"
							href="https://github.com/toplouie1/FSW-React-Calculator"
							target="blank"
						>
							Code
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
