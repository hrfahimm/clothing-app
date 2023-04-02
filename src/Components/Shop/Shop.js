import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {addToDb, getStoredCart} from "../../utilities/fackdb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	useEffect(() => {
		fetch("./product.JSON")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setDisplayProducts(data);
			});
	}, []);
	useEffect(() => {
		if (products.length) {
			const savedCart = getStoredCart();
			const storedCart = [];
			for (const key in savedCart) {
				const addedProduct = products.find((product) => product.key === key);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					storedCart.push(addedProduct);
				}
			}
			setCart(storedCart);
		}
	}, [products]);

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
	const handleSearch = (event) => {
		const searchText = event.target.value;
		const matchedProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setDisplayProducts(matchedProducts);
	};

	return (
		<div>
			<div className="search-container">
				<input
					className="input-fild"
					type="text"
					placeholder="Search Here..."
					onChange={handleSearch}
				/>
			</div>
			<div className="shop-container">
				<div className="cart-container">
					<Cart cart={cart}>
						<Link to="/review">
							<button className="blur-btn"> Review order</button>
						</Link>
					</Cart>
				</div>
				<div className="product-container">
					{displayProducts.map((product) => (
						<Product
							handleAddToCart={handleAddToCart}
							key={product.key}
							product={product}></Product>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shop;

//
////

/////

// import React, {useEffect, useState} from "react";
// import Product from "../Product/Product";
// import Cart from "../Cart/Cart";
// import "./Shop.css";

// import {Link} from "react-router-dom";
// import {addToDb, getStoredCart} from "../../utilities/fackdb";
// const Shop = () => {
// 	const [products, setProducts] = useState([]);
// 	const [cart, setCart] = useState([]);
// 	const [displayProducts, setDisplayProducts] = useState([]);
// 	useEffect(() => {
// 		fetch("./product.JSON")
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setProducts(data);
// 				setDisplayProducts(data);
// 			});
// 	}, []);
// 	useEffect(() => {
// 		if (products.lenght) {
// 			const savedCart = getStoredCart();
// 			const storedCart = [];
// 			for (const key in savedCart) {
// 				const addedProduct = products.find((product) => product.key === key);
// 				if (addedProduct) {
// 					const quantity = savedCart[key];
// 					addedProduct.quantity = quantity;
// 					storedCart.push(addedProduct);
// 				}
// 			}
// 			setCart(storedCart);
// 		}
// 	}, [products]);
// 	const handleAddToCart = (product) => {
// 		const exists = cart.find((pd) => pd.key === product.key);
// 		let newCart = [];
// 		if (exists) {
// 			const rest = cart.filter((pd) => pd.key !== product.key);
// 			exists.quantity = exists.quantity + 1;
// 			newCart = [...rest, product];
// 		} else {
// 			product.quantity = 1;
// 			newCart = [...cart, product];
// 		}
// 		setCart(newCart);
// 		addToDb(product.key);
// 	};
// 	const handleSearch = (event) => {
// 		const searchText = event.target.value;
// 		const matchedProducts = products.filter((product) =>
// 			product.name.toLowerCase().includes(searchText.toLowerCase())
// 		);
// 		setDisplayProducts(matchedProducts);
// 	};
// 	return (
// 		<div>
// 			<div className="search-container">
// 				<input
// 					className="input-fild"
// 					onChange={handleSearch}
// 					type="text"
// 					placeholder="Search Here..."
// 				/>
// 			</div>
// 			<div className="shop-container">
// 				<div className="product-container">
// 					<h1>Our Products</h1>
// 					{displayProducts.map((product) => (
// 						<Product
// 							product={product}
// 							key={product.key}
// 							handleAddToCart={handleAddToCart}></Product>
// 					))}
// 				</div>
// 				<div className="cart-container">
// 					<Cart cart={cart}>
// 						<Link to="/review">
// 							<button className="btn-reguler"> Review Order</button>
// 						</Link>
// 					</Cart>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Shop;
