import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/homePage.tsx";
import {ProductPage} from "./pages/product.page.tsx";
import {AppWrapper} from "./components/appWrapper.tsx";

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
			}
		]
	}
])

export function Router() {
	return (
		<RouterProvider router={router}/>
	)
}