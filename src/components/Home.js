import React from "react";
import "./Home.css";
import home from "../images/home.webp";

function Home() {
	return (
		<div className="mainContainer">
			<div>
				<img className="homeImg" src={home} alt="homeimg" />
			</div>

			<div id="homeContainer">
				<div className="firstOne">
					<span className="hiColor">Hi, my name is </span>
					<span className="firstP">Nimá sherpá</span>
				</div>
				<div className="second-One">
					<span className="hiColor">I'm Full Stack Web Developer...</span>
				</div>
			</div>
		</div>
	);
}

export default Home;
