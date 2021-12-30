import React from "react";
import "./Contact.css";
import github from "../images/github.png";
import linked from "../images/link.png";

function Contact() {
	return (
		<div id="contactsContainer">
			<h1>Connect With Me</h1>
			<div className="contactSection">
				<div className="emailSpot">Email : Toplv1999@gmail.com</div>

				<a target="blank" href="https://github.com/toplouie1">
					<img src={github} alt="gitjub logo" />
				</a>
				<a
					target="blank"
					href="https://www.linkedin.com/in/nima-sherpa-00b1a9210/"
				>
					<img className="linked" src={linked} alt="linkedIn logo" />
				</a>
			</div>

			<div className="footer">Built By Nima Sherpa...</div>
		</div>
	);
}

export default Contact;
