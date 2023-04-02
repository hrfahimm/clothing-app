import React from "react";

const ReviewItem = (props) => {
	const {name, price, quantity, key, img} = props.product;
	const {handleRemove} = props;
	return (
		<div className="product">
			<div className="product-img">
				<img src={img} alt="" />
			</div>
			<div>
				<h3 className="product-name">Name{name.slice(0, 20)}</h3>
				<p>Price {price}</p>
				<p>Quantity {quantity}</p>
				<button onClick={() => handleRemove(key)} className="rgb-btn">
					Remove
				</button>
			</div>
		</div>
	);
};

export default ReviewItem;
