import React, { useState } from "react";
import "./About.css";
import html from "../skillsimg/html.png";
import css from "../skillsimg/css.png";
import js from "../skillsimg/js.png";
import boot from "../skillsimg/boot.png";
import npm from "../skillsimg/npm.png";
import react from "../skillsimg/react.png";
import sql from "../skillsimg/sql.png";
import node from "../skillsimg/node.png";
import express from "../skillsimg/express.png";
import api from "../skillsimg/apii.png";
import git from "../skillsimg/git.png";
import vscode from "../skillsimg/vscode.png";

function About() {
	const [frontOpen, setFrontOpen] = useState(false);
	const [backOpen, setBackOpen] = useState(false);

	return (
		<div id="aboutContainer">
			<div className="aboutMain">
				<h1 className="aboutHeading">About mé</h1>
				<p>Hey, my name is Nima Sherpa. I am a Full stack Web Developer.</p>
				<p>
					My journey into software development began when i opened an e-commerce
				</p>
				<p>store that led to making website from shopify.</p>
				<p>When i saw how easy the website made the client job easier</p>
				<p> it made me very curious and led me to the path of self-teaching.</p>
				<p>I finally found web development and the first few line of code</p>
				<p>
					I feel in love with creating something through Your knowledge of tech.
				</p>
				<p>
					that led me to Pursuit bootcamp where they help you become your best
					self while
				</p>
				<p>teaching you everything that is needed inorder to be succesful.</p>
			</div>

			<h3 className="headerSkills"> Skills </h3>

			<div className="skills">
				<img src={html} alt="html" />
				<img src={css} alt="css" />
				<img src={js} alt="js" />
				<img src={node} alt="node" />
				<img src={express} alt="express" />
				<img src={react} alt="react" />
				<img src={sql} alt="sql" />
				<img src={api} alt="api" />
				<img src={git} alt="git" />
				<img src={boot} alt="boot" />
				<img src={npm} alt="npm" />
				<img src={vscode} alt="vscode" />
			</div>

			<section className="skillsContainer">
				<div>
					<h1
						className="skillButton"
						onClick={() => {
							setFrontOpen(!frontOpen);
						}}
					>
						Front-End
					</h1>

					<ul className={`${frontOpen ? "frontUl" : "frontClosed"}`}>
						<li>Html/Css</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Api</li>
						<li>BootStrap</li>
						<li>Material UI</li>
					</ul>
				</div>

				<div>
					<h1 className="skillButton" onClick={() => setBackOpen(!backOpen)}>
						Back-End
					</h1>
					<ul className={`${backOpen ? "frontUl" : "frontClosed"}`}>
						<li>Node</li>
						<li>Express</li>
						<li>PostgreSQL</li>
						<li>Git</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

export default About;
