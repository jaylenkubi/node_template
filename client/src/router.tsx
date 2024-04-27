import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/homePage.tsx";
import {ProductPage} from "./pages/product.page.tsx";
import {AppWrapper} from "./components/appWrapper.tsx";
import {Login} from "./pages/login.page.tsx";
import {Signup} from "./pages/signup.page.tsx";
import { ShoppingBag } from './pages/shoppingBag.tsx';
import { CheckoutGuest } from './pages/checkoutGuest.tsx';
import { CheckoutGuestPayment } from "./pages/checkoutGuestPayment.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppWrapper/>,
		children: [
			{
				path: '/',
				element: <HomePage/>
			},
			{
				path: '/product-page',
				element: <ProductPage/>
			},
			{
				path: '/auth/login',
				element: <Login/>
			},
			{
				path: '/auth/sign-up',
				element: <Signup/>
			},
			{
				path: '/shopping-bag',
				element: <ShoppingBag/>
			},{
				path: '/checkout/guest',
				element: <CheckoutGuest/>
			},{
				path: '/checkout/guest/payment',
				element: <CheckoutGuestPayment/>
			}
		]
	}
])

export function Router() {
	return (
		<RouterProvider router={router}/>
	)
}