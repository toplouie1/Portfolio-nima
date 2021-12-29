import React from "react";
import "./Nav.css";

function Nav() {
	return (
		<div id="navContainer">
			<div id="mainNav">
				<div className="logo">N</div>
				<ul className="allList">
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
					<button>Resume</button>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
