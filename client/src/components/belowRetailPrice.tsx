import {Button, Container, Flex, Group, ScrollArea, Title} from "@mantine/core";
import {ProductCard} from "./product.card.tsx";
import {ResponsiveProductGrid} from "./responsiveProduct.grid.tsx";
import {useMediaQuery} from "@mantine/hooks";
import {useEffect, useState} from "react";
import {useCheckMediaQuery} from "../shared/hooks/useCheckMediaQuery.ts";


const data = [
	{
		imageUrl: "https://laced.imgix.net/products/b67c9144-ba25-45c5-b59f-156f0eb75518.jpg?auto=format&fit=crop&w=442",
		brand: "Nike",
		title: "Nike Air Force 1 Low 07 White",
		price: "£85"
	}, {
		imageUrl: "https://laced.imgix.net/products/b08e827e-3409-45de-92bb-2dc2661e522e.jpg?auto=format&fit=crop&w=442",
		brand: "Air Jordan",
		title: "Air Jordan 1 Mid White True Blue Grey GS",
		price: "£85"
	}, {
		imageUrl: "https://laced.imgix.net/products/530ec279-9847-4cc4-9fab-62b0b5e15364.jpg?auto=format&fit=crop&w=442",
		brand: "Nike",
		title: "Nike Dunk Low Team Red",
		price: "£105"
	}, {
		imageUrl: "https://laced.imgix.net/products/1b98a733-a574-4841-9a81-5cbaab06616a.jpg?auto=format&fit=crop&w=442",
		brand: "New Balance",
		title: "New Balance 550 Mid White Grey",
		price: "£95"
	},
	{
		imageUrl: "https://laced.imgix.net/products/98ea3b6c-bb97-4df9-99d2-76f1bff04f9e.jpg?auto=format&fit=crop&w=442",
		brand: "Air Jordan",
		title: "Air Jordan 3 Midnight Navy",
		price: "£200"
	}, {
		imageUrl: "https://laced.imgix.net/products/5b5f1bb4-0656-4384-aa78-c43c9b3a9018.jpg?auto=format&fit=crop&w=442",
		brand: "Adidas",
		title: "Adidas Handball Spezial Clear Pink Arctic Night ",
		price: "£100"
	},
]

export function BelowRetailPrice() {
	const { isSmallScreen, isMediumScreen, isLargeScreen} = useCheckMediaQuery()
	const [maxProducts, setMaxProducts] = useState<number>(0);
	const [displayProducts, setDisplayProducts] = useState<any[]>([]);
	useEffect(() => {
		if (isSmallScreen) {
			setMaxProducts(4)
		} else {
			setMaxProducts(6);
		}
	}, [isSmallScreen, isMediumScreen, isLargeScreen]);

	useEffect(() => {
		const productsToDisplay = data.slice(0, maxProducts);
		setDisplayProducts(productsToDisplay)
	}, [maxProducts]);
	return (

		<ResponsiveProductGrid products={displayProducts} title={'Below Retail Price'}/>
	)
}