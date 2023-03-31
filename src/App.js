import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import Product from "./Components/Product/Product";
import PleaceOrder from "./Components/PleaceOrder/PleaceOrder";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/review" element={<OrderReview />} />
					<Route path="/pleaceorder" element={<PleaceOrder />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
