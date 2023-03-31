import React from "react";
import "./NotFound.css";
// import img from "../../images/error.jpg";
import {Link} from "react-router-dom";
const NotFound = () => {
	return (
		<div className="error">
			{/* <div>
				<img className="img" src={img} alt="" />
			</div> */}
			<div>
				<h1>404</h1>
				<h3>Page Not Found</h3>
				<Link className="btn-error" to="/home">
					BacK To Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
