import { Grid, Image, Paper, Title, Text, Flex, Button, Stack } from '@mantine/core';
import classes from '../styles/components/shoppingBag.module.scss';
import { useState } from 'react';
import classes2 from '../styles/components/globalStyles.module.scss';
import { useNavigate } from 'react-router-dom';

const data = {
	brand: 'Adidas',
	title: 'Adidas Campus OOS Grey Gum',
	image1: 'https://laced.imgix.net/products/12add952-7272-4d1f-bda3-a63602e4d86c.jpg?auto=format&fit=crop&w=3246',
	image2: 'https://laced.imgix.net/products/bf1c92a8-4216-41a3-b7b8-49b1256193ed.jpg?auto=format&fit=crop&w=3246',
	image3: 'https://laced.imgix.net/products/7f4bba43-95e2-4d91-ba4c-7b75fbaccf1f.jpg?auto=format&fit=crop&w=3246',
	image4: 'https://laced.imgix.net/products/53e2db64-b7ee-47ef-801c-5d5bfe13c770.jpg?auto=format&fit=crop&w=3246',
	image5: 'https://laced.imgix.net/products/8748ab96-f84d-4c66-bc1e-1c1cb2a571d2.jpg?auto=format&fit=crop&w=3246',
	price: 129,
	description:
		'Sporting a muted colourway and retro aesthetics, the adidas Campus 00s Grey Gum is fastened with the model’s signature oversized laces. Crafted with perforations for breathability, its suede base is detailed with leather stripes and a branded heel tab. Underfoot, the cushioned midsole delivers comfort and the gum rubber outsole provides grip. Finished with a padded tongue and collar, the adidas Campus 00s Grey Gum is available to buy and sell with Laced.',
	category: 'Campus 00s',
	colour: 'Grey',
	yearReleased: '2020'
};

export function ShoppingBag() {
	const [displayImage, setDisplayImage] = useState<string>(data.image1);
	const navigate = useNavigate();

	return (
		<div className={classes.shoppingBagContainer}>
			<Text fz={'xl'} my={'lg'} pl={{ base: 32, sm: 0 }}>
				YOUR BAG SUMMARY
			</Text>
			<Paper maw={720} p={{ base: 32, lg: 40 }} mih={400} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<div>
					<Grid w="100%" mb={8}>
						<Grid.Col span={{ base: 3, lg: 2 }}>
							<Image src={data.image1} className={classes.cardProductImage} />
						</Grid.Col>
						<Grid.Col span={7}>
							<Flex direction="column" justify="space-between" h="100%">
								<div style={{ marginTop: 8 }}>
									<Text className={classes2.productCardBrand}>{data.title}</Text>
									<Text className={classes2.productCardCopy}>8.5</Text>
								</div>
								<Button variant="subtle" w="fit-content" styles={{ label: { decoration: 'underline' } }}>
									Remove
								</Button>
							</Flex>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text fz="sm">£200</Text>
						</Grid.Col>
					</Grid>
					<Grid w="100%">
						<Grid.Col span={{ base: 3, lg: 2 }}>
							<Image src={data.image1} className={classes.cardProductImage} />
						</Grid.Col>
						<Grid.Col span={7}>
							<Flex direction="column" justify="space-between" h="100%">
								<div style={{ marginTop: 8 }}>
									<Text className={classes2.productCardBrand}>{data.title}</Text>
									<Text className={classes2.productCardCopy}>8.5</Text>
								</div>
								<Button variant="subtle" w="fit-content" styles={{ label: { decoration: 'underline' } }}>
									Remove
								</Button>
							</Flex>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text fz="sm">£200</Text>
						</Grid.Col>
					</Grid>
				</div>
				<div style={{ marginTop: 24 }}>
					<Text align={'right'}>Subtotal: £400</Text>
					<Button my={8} variant={'filled'} fullWidth onClick={() => navigate('/checkout/guest')}>
						CHECKOUT
					</Button>
					<Text fz={'xs'}>All prices are inclusive of VAT</Text>
				</div>
			</Paper>
		</div>
	);
}
