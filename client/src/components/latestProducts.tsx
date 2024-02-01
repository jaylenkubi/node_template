import {Card, Container, Grid, Image, Text} from "@mantine/core";
import classes from "../styles/components/globalStyles.module.scss";

const data = [
	{
		imageUrl: "https://laced.imgix.net/products/0aaf02f2-5c64-4f1d-aae0-59552d0a20ca.jpg?auto=format&fit=crop&w=442",
		brand: "Air Jordan",
		title: "Air Jordan 1 Mid Bred Toe White GS",
		price: "£70"
	}, {
		imageUrl: "https://laced.imgix.net/products/1b98a733-a574-4841-9a81-5cbaab06616a.jpg?auto=format&fit=crop&w=442",
		brand: "New Balance",
		title: "New Balance 550 Mid White Grey",
		price: "£95"
	}, {
		imageUrl: "https://laced.imgix.net/products/f2910a14-9d95-4259-976a-8cbe288fda6a.png?auto=format&fit=crop&w=442",
		brand: "New Balance",
		title: "New Balance 550 Mid Red",
		price: "£60"
	}, {
		imageUrl: "https://laced.imgix.net/products/fc054c71-3fc3-4032-98ea-877494a55ea6.jpg?auto=format&fit=crop&w=442",
		brand: "Air Jordan",
		title: "Air Jordan 11 Gratitude",
		price: "£180"
	}, {
		imageUrl: "https://laced.imgix.net/products/63dee842-66ba-4876-be18-b9e0111a868e.jpg?auto=format&fit=crop&w=442",
		brand: "Nike",
		title: "Nike TN Air Plus OG Voltage Purple",
		price: "£200"
	}, {
		imageUrl: "https://laced.imgix.net/products/98ea3b6c-bb97-4df9-99d2-76f1bff04f9e.jpg?auto=format&fit=crop&w=442",
		brand: "Air Jordan",
		title: "Air Jordan 3 Midnight Navy",
		price: "£200"
	}, {
		imageUrl: "https://laced.imgix.net/products/5b5f1bb4-0656-4384-aa78-c43c9b3a9018.jpg?auto=format&fit=crop&w=442",
		brand: "Adidas",
		title: "Adidas Handball Spezial Clear Pink Arctic Night Womens",
		price: "£100"
	}, {
		imageUrl: "https://laced.imgix.net/products/7dfbe584-6d30-42a0-b1b9-4ad6d9152d17.jpg?auto=format&fit=crop&w=442",
		brand: "Nike",
		title: "Nike Air Foamposite One Black",
		price: "£285"
	},
]

interface CardProps {
	imageUrl: string;
	brand: string;
	title: string;
	price: string;
}

function ProductCard({imageUrl, brand, title, price}: CardProps) {

	return (
		<Card className={classes.ProductCard}>
			<Card.Section className={classes.ProductCardImageSection}>
				<Image
					src={imageUrl}
					height={160}
					alt="Norway"
				/>
			</Card.Section>
			<Grid style={{height: "100%"}}>
				<Grid.Col>
					<Text className={classes.productCardCopy}>
						{brand}
					</Text>
				</Grid.Col>
				<Grid.Col style={{height: "50px"}}>
					<Text  className={classes.productCardCopy}>
						{title}
					</Text>
				</Grid.Col>
				<Grid.Col style={{height: "40px", display: "flex", alignItems: "flex-end"}}>
					<Text  className={classes.productCardPrice}>
						{price}
					</Text>
				</Grid.Col>
			</Grid>
		</Card>
	)
}

export function LatestProducts() {
	const products = data.map((item) => <Grid.Col span={3}>
		<ProductCard {...item} key={item.title}/>
	</Grid.Col>)
	return (
		<Container size="lg">
			<Grid>
				{products}
			</Grid>
		</Container>
	)
}