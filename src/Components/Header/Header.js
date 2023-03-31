import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import icon from "../../images/logo.png";
const Header = () => {
	return (
		<div className="nav-bar">
			<div className="nav-icon">
				<img src={icon} alt="" />
			</div>
			<div className="nav-link">
				<Link className="link" to="/home">
					Home
				</Link>
				<Link className="link" to="/shop">
					Shop
				</Link>
				<Link className="link" to="/review">
					Review
				</Link>
				<Link className="link" to="/about">
					About
				</Link>
			</div>
		</div>
	);
};

export default Header;
