import React from "react";
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
	return (
		<div id="aboutContainer">
			<div className="aboutMain">
				<h1 className="aboutHeading">About mé</h1>
				<p>Hey, my name is Nima Sherpa. I am a Full stack Web Developer.</p>
				<p>
					My journey into software development began when i open an e-commerce
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
				<p>
					Since then I have been practicing inorder to be an efficent coder .
				</p>
			</div>

			<h3> Skills </h3>

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

			<p className="skillss">
				- HTML/CSS - JavaScript - Node - Express - React - PostgreSQL - APIs -
				Git - BootStrap - Modern-UI - react-three-fiber - npm - DSA,
			</p>
		</div>
	);
}

export default About;
