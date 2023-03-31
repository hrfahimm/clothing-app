import React from "react";
import "./Home.css";

import HomeSlide from "../HomeSlide/HomeSlide";
import ShoppingCard from "../ShopingCard/ShoppingCard";
import Shop from "../Shop/Shop";
import About from "../About/About";
const Home = () => {
	return (
		<div className="home">
			<HomeSlide></HomeSlide>
			<ShoppingCard></ShoppingCard>
			{/* <Shop></Shop> */}
			<About></About>
		</div>
	);
};

export default Home;
