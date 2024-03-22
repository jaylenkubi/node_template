import {Card, Grid, Image, Text} from "@mantine/core";
import classes from "../styles/components/globalStyles.module.scss";
import {useNavigate} from "react-router-dom";

interface CardProps {
	imageUrl: string;
	brand: string;
	title: string;
	price: string;
}

export function ProductCard({imageUrl, brand, title, price}: CardProps) {
	const navigate = useNavigate()
	return (
		<Card className={classes.ProductCard} onClick={() => navigate('/product-page')}>
			<Card.Section className={classes.ProductCardImageSection}>
				<Image
					src={imageUrl}
					height={160}
					alt="Norway"
				/>
			</Card.Section>
			<Grid style={{height: "100%"}}>
				<Grid.Col>
					<Text className={classes.productCardBrand}>
						{brand}
					</Text>
				</Grid.Col>
				<Grid.Col style={{height: "50px"}}>
					<Text className={classes.productCardCopy}>
						{title}
					</Text>
				</Grid.Col>
				<Grid.Col style={{height: "40px", display: "flex", alignItems: "flex-end"}}>
					<Text className={classes.productCardPrice}>
						{price}
					</Text>
				</Grid.Col>
			</Grid>
		</Card>
	)
}