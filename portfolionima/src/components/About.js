import React from "react";
import "./About.css";

function About() {
	return (
		<div id="aboutContainer">
			<h1 className="aboutHeading">About Me</h1>
			<p className="aboutParagraph">
				Hey, my name is Nima Sherpa. I am a full stack software engineer.
			</p>
			<p>
				My journey into software development began when I started thinking about
				what career I should choose that I love.
			</p>
			<p>
				I finally found web development. I really wanted to get involved with
				tech so I wanted to find a way to learn coding as soon as possible ,
			</p>
			<p>
				that led me to Pursuit where they will teach you how to code and make
				you successful in future .
			</p>
			<p>
				Since then I have been practicing learning code and it gives me
				satisfaction after I finish some type of a project.
			</p>
			<p>My goal is to be an efficient coder by the end of the pursuit days.</p>
			<h3> Skills </h3>
			<p className="skills">
				HTML/CSS, JavaScript, Node, Express, React/Redux, PostgreSQL, APIs, Git,
				Data Structures,
			</p>
		</div>
	);
}

export default About;
