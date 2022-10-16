import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import Favorites from "./favorites";
import Login from "./login";
import Payment from "./payment";
import NotFound from "./404";


export default function Root() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Detail />} path="/detail/:id" />
				<Route element={<Favorites />} path="/favorites" />
				<Route element={<Login />} path="/login" />
				<Route element={<Payment />} path="/payment" />
				<Route element={<NotFound />} path="*" />
			</Routes>
		</BrowserRouter>
	);
}
