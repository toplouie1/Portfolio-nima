import React from "react";
import "./Nav.css";
import main from "../images/main.png";

function Nav() {
	return (
		<div id="navContainer">
			<div id="mainNav">
				<img className="logo" src={main} alt="logo" />
				<ul className="allList">
					<li>
						<a href="#aboutContainer">About</a>
					</li>
					<li>
						<a href="#projectsContainer">Projects</a>
					</li>
					<li>
						<a href="#contactsContainer">Contact</a>
					</li>
					<button className="navbutton">
						<a
							href="https://docs.google.com/document/d/1Ac24F1WTKly_uBn3fmcRcmoDj3NxFjFpwNPN-4fN4oU/edit#heading=h.aq0eiavth27t"
							target="blank"
						>
							Resume
						</a>
					</button>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
