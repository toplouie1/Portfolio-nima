import React from "react";
import "./Nav.css";
import main from "../images/main.png";

function Nav() {
	return (
		<div id="navContainer">
			<div id="mainNav">
				<img className="logo" src={main} alt="logo" />
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
							href="https://docs.google.com/document/d/1Ac24F1WTKly_uBn3fmcRcmoDj3NxFjFpwNPN-4fN4oU/edit#heading=h.aq0eiavth27t"
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
