import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LandingPage} from "./pages/landing.page.tsx";
import {ProductPage} from "./pages/product.page.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage/>,
	}, {
		path: '/product-page',
		element: <ProductPage/>
	}
])

export function Router() {
	return (
		<RouterProvider router={router}/>
	)
}