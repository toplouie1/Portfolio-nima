import React from "react";
import "./Projects.css";
import calculator from "../images/calculator.png";
import youtube from "../images/youtubeClone.png";
// import weather from "../images/weather.png";
// import pixel from "../images/pixelPainter.png";
// import Budget from "../images/budget.png";
import eduk from "../images/eduk.png";
import Novus from "../images/Novus.png";

function Projects() {
	return (
		<div id="projectsContainer">
			<h1 className="headingProjects">projécts</h1>

			<div className="project">
				<div>
					<a href="https://edukapp.netlify.app/" target="blank">
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
								href="https://github.com/toplouie1/EDUK"
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
					<a href="https://novus-news.netlify.app/" target="blank">
						<img className="imgs" src={Novus} alt="Novus-img" />
					</a>
				</div>
				<div className="discriptionContainer">
					<div className="summaryP">
						<h2>
							<span className="descriptionSpan">-</span> Novus{" "}
							<span className="descriptionSpan">-</span>
						</h2>
						<span className="technologyTitle">Description</span> : Novus is a
						modern, AI-powered news aggregation platform that delivers
						personalized news experiences through advanced recommendation
						systems and semantic search capabilities. Our platform gathers news
						from around the world while using AI-driven insights and
						retrieval-augmented generation (RAG) to provide a clearer, more
						engaging perspective on the stories that matter.
						<div>
							<span className="technologyTitle">Technology Utilized</span> :
							React, Node.js, Express, PostgreSQL, pg vector, Gemini Embeddings,
							CSS3, React Router DOM, Context API.
						</div>
						<p>
							<a
								className="technologyTitle"
								href="https://github.com/toplouie1/Novus"
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
