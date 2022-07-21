import React from "react";
import "./Home.css";
import home from "../images/myPic.png";

function Home() {
	return (
		<div className="mainContainer">
			<div id="homeContainer">
				<div className="firstOne">
					<span className="hiColor">Hey, my name is </span>
					<span className="firstP"> -Nimá sherpá-</span>
				</div>
				<div className="second-One">
					<span className="hiColor">I'm A</span>{" "}
					<span className="firstP">-Full Stack Web Developer</span>
				</div>
			</div>
			<div className="imgContainer">
				<img className="homeImg" src={home} alt="homeimg" />
			</div>
		</div>
	);
}

export default Home;
