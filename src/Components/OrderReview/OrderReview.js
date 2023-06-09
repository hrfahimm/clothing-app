import React from "react";
import {useNavigate} from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import {clearTheCart, removeFromDb} from "../../utilities/fackdb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Product/Product.css";
import "./OrderReview.css";
const OrderReview = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart(products);
	const navigate = useNavigate();
	const handleRemove = (key) => {
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
		removeFromDb(key);
	};
	const handlePleaceOrder = () => {
		navigate("/pleaceOrder");
		setCart([]);
		clearTheCart();
	};
	return (
		<div>
			<div className="shop-container">
				<div className="product-container">
					{cart.map((product) => (
						<ReviewItem
							product={product}
							key={product.key}
							handleRemove={handleRemove}
						/>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart}>
						<button onClick={handlePleaceOrder} className="blur-btn">
							Please Order
						</button>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderReview;
