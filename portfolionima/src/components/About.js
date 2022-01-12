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
			<h1 className="aboutHeading">About mé</h1>
			<p className="aboutParagraph">
				Hey, my name is Nima Sherpa. I am a full stack web developer.
			</p>
			<p>
				My journey into software development began when I started thinking about
				what career I should choose that I love.
			</p>
			<p>
				I finally found web development and the first few line of code I feel in
				love with creating something through Your knowledge of tech.
			</p>
			<p>
				that led me to Pursuit bootcamp where they help you become your best
				self while teaching you everything that is needed inorder to be
				succesful.
			</p>
			<p>Since then I have been practicing inorder to be an efficent coder .</p>
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
				- HTML/CSS - JavaScript - Node - Express - React/Redux - PostgreSQL -
				APIs - Git - Boot Strap - npm - Data Structures,
			</p>
		</div>
	);
}

export default About;
