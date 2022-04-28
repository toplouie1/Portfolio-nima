import React from "react";
import "./Nav.css";

function Nav() {
	return (
		<div id="navContainer">
			<div id="mainNav">
				<div className="logo">NNS</div>
				<ul className="allList">
					<li className="eachLi">
						<a href="#aboutContainer">About</a>
					</li>
					<li className="eachLi">
						<a href="#projectsContainer">Projects</a>
					</li>
					<li className="eachLi">
						<a href="#contactsContainer">Contact</a>
					</li>
					<li className="eachLi resume">
						<a
							href="https://docs.google.com/document/d/1cODukgCQzy5lNVWO1-vezqMOV5RlxsDw/edit"
							target="blank"
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
