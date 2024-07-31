import React from "react";
import "./Nav.css";
// import nns from "../images/nns.png";

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
							href="https://docs.google.com/document/d/1a-ysjaiyZuE8jWWBrY3IVTokBjisQmVYO546Y64YD-c/edit?usp=sharing"
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
