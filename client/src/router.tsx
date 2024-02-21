import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/homePage.tsx";
import {ProductPage} from "./pages/product.page.tsx";
import {AppWrapper} from "./components/appWrapper.tsx";
import {Login} from "./pages/login.page.tsx";
import {Signup} from "./pages/signup.page.tsx";

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
			}
		]
	}
])

export function Router() {
	return (
		<RouterProvider router={router}/>
	)
}