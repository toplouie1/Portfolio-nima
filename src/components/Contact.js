import React from "react";
import "./Contact.css";
import github from "../images/github.png";
import linked from "../images/link.png";
import arrow from "../images/arrow.png";

function Contact() {
	return (
		<div id="contactsContainer">
			<div className="contactsHeader">Connect with Me</div>
			<div className="contactSection">
				<div className="emailSpot">Email : toplvv010@gmail.com</div>

				<a target="blank" href="https://github.com/toplouie1">
					<img className="githubImg" src={github} alt="github logo" />
				</a>
				<a
					target="blank"
					href="https://www.linkedin.com/in/nima-sherpa-00b1a9210/"
				>
					<img className="linked" src={linked} alt="linkedIn logo" />
				</a>
			</div>

			<div className="footer">Built By Nima Sherpa...</div>
			<div className="arrowContainer">
				<a href="#mainNav">
					<img className="arrow" src={arrow} alt="arrow that leads you up " />
				</a>
				<a href="#mainNav">
					<img className="arrow" src={arrow} alt="arrow that leads you up " />
				</a>
			</div>
		</div>
	);
}

export default Contact;
