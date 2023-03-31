import React, {useEffect, useState} from "react";
import {addToDb} from "../../utilities/fackdb";
import Card from "../Card/Card";
import "./ShoppingCard.css";
const ShoppingCard = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("./product.JSON")
			.then((res) => res.json())
			.then((data) => setProducts(data.slice(0, 3)));
	}, []);
	const handleAddToCart = (product) => {
		const exists = cart.find((pd) => pd.key === product.key);
		let newCart = [];
		if (exists) {
			const rest = cart.filter((pd) => pd.key !== product.key);
			exists.quantity = exists.quantity + 1;
			newCart = [...rest, product];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}
		// console.log(product);

		setCart(newCart);
		addToDb(product.key);
	};

	return (
		<div className="cards">
			<div>
				<h1>Our Populer Products</h1>
			</div>
			<div className="product-container">
				{products.map((product) => (
					<Card
						handleAddToCart={handleAddToCart}
						key={product.key}
						product={product}></Card>
				))}
			</div>
		</div>
	);
};

export default ShoppingCard;
