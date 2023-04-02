import React from "react";

import "./Product.css";
const Product = (props) => {
	const {img, name, price, seller, ratings, stock} = props.product;

	return (
		<div>
			<div className="product">
				<div className="product-img">
					<img src={img} alt="" />
				</div>
				<div className="product-text">
					<h3>{name.slice(0, 25)}</h3>
					<div style={{display: "flex", justifyContent: "space-between"}}>
						<p>By: {seller}</p>
						<p>Stock: {stock}</p>
					</div>
					<h4>Price: {price}</h4>
					<p>{ratings}</p>
					<button
						onClick={() => props.handleAddToCart(props.product)}
						className="rgb-btn">
						add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
