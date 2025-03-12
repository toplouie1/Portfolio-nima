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
				<p>
					Hi, I'm Nima Sherpa, a full-stack web developer with expertise in
					front-end and back-end technologies like JavaScript, React, Node.js,
					and Python.
				</p>
				<p>
					At Peloton, I worked on integrating Commerce tools into the system and
					developing e-commerce features like a user-friendly gifting system and
					a streamlined checkout process,
				</p>
				<p>significantly improving customer experience and engagement.</p>
				<p>
					I'm passionate about building scalable APIs, leveraging Agile
					methodologies,
				</p>
				<p>and delivering impactful software solutions.</p>
				<p>
					Currently, I'm fascinated by AI and focused on building AI-powered web
					apps
				</p>
				<p>
					and exploring other AI applications to drive innovation and enhance
					user experiences.
				</p>
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
		</div>
	);
}

export default About;
