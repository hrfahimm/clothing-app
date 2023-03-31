import React from "react";
import "./HomeSlide.css";
import img from "../../images/slide-img.jpg";
const HomeSlide = () => {
	return (
		<div>
			<div className="home-slider">
				<div className="slide-text">
					<h1>Shopping With US</h1>
					<h4>Our store is the Treasure Island for your fashion.</h4>
				</div>
				<div className="slide-img">
					<img src={img} alt="" />
				</div>
			</div>
		</div>
	);
};

export default HomeSlide;
