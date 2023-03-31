import React from "react";

import "./Footer.css";
const Footer = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="footer-col">
						<h4>company</h4>
						<ul>
							<li>
								<a  >about us</a>
							</li>
							<li>
								<a  >our services</a>
							</li>
							<li>
								<a  >privacy policy</a>
							</li>
							<li>
								<a  >affiliate program</a>
							</li>
						</ul>
					</div>
					<div className="footer-col">
						<h4>get help</h4>
						<ul>
							<li>
								<a  >FAQ</a>
							</li>
							<li>
								<a  >shipping</a>
							</li>
							<li>
								<a  >returns</a>
							</li>
							 
							<li>
								<a  >payment options</a>
							</li>
						</ul>
					</div>
					<div className="footer-col">
						<h4>online shop</h4>
						<ul>
							<li>
								<a  >watch</a>
							</li>
							<li>
								<a  >bag</a>
							</li>
							<li>
								<a  >shoes</a>
							</li>
							<li>
								<a  >dress</a>
							</li>
						</ul>
					</div>
					<div className="footer-col">
						<h4>follow us</h4>
						<div className="social-links">
							<a  >
								<i className="fab fa-facebook-f"></i>
							</a>
							<a  >
								<i className="fab fa-twitter"></i>
							</a>
							<a  >
								<i className="fab fa-instagram"></i>
							</a>
							<a  >
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
