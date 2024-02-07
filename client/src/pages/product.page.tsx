import {Carousel} from "@mantine/carousel";
import {Accordion, Button, Container, Flex, Grid, Group, Image, Select, Text, Divider, List} from "@mantine/core";
import classes from "../styles/components/productCarousel.module.scss";
import {useState} from "react";

const data = {
	brand: 'Adidas',
	title: 'Adidas Campus OOS Grey Gum',
	image1: 'https://laced.imgix.net/products/12add952-7272-4d1f-bda3-a63602e4d86c.jpg?auto=format&fit=crop&w=3246',
	image2: 'https://laced.imgix.net/products/bf1c92a8-4216-41a3-b7b8-49b1256193ed.jpg?auto=format&fit=crop&w=3246',
	image3: 'https://laced.imgix.net/products/7f4bba43-95e2-4d91-ba4c-7b75fbaccf1f.jpg?auto=format&fit=crop&w=3246',
	image4: 'https://laced.imgix.net/products/53e2db64-b7ee-47ef-801c-5d5bfe13c770.jpg?auto=format&fit=crop&w=3246',
	image5: 'https://laced.imgix.net/products/8748ab96-f84d-4c66-bc1e-1c1cb2a571d2.jpg?auto=format&fit=crop&w=3246',
	price: 129,
	description: 'Sporting a muted colourway and retro aesthetics, the adidas Campus 00s Grey Gum is fastened with the model’s signature oversized laces. Crafted with perforations for breathability, its suede base is detailed with leather stripes and a branded heel tab. Underfoot, the cushioned midsole delivers comfort and the gum rubber outsole provides grip. Finished with a padded tongue and collar, the adidas Campus 00s Grey Gum is available to buy and sell with Laced.',
	category: 'Campus 00s',
	colour: 'Grey',
	yearReleased: '2020'
}

export function ProductPage() {
	const [displayImage, setDisplayImage] = useState<string>(data.image1)
	const slides = [data.image1, data.image2, data.image3, data.image4, data.image5].map((item) => (
		<Carousel.Slide key={item}>
			<Image src={item} alt={data.title} className={classes.productCarouselPaper}/>
		</Carousel.Slide>
	))
	return (
		<Grid className={classes.productGrid}>
			<Grid.Col span={{base: 12, lg: 6}}>
				<Container my="lg" className={classes.productGridCarouselHeader}>
					<Text>
						Adidas
					</Text>
					<Text fz="25px" fw="500">
						{(data.title).toUpperCase()}
					</Text>
				</Container>
				<Carousel my="lg" loop withIndicators className={classes.productDisplayCarousel}>
					{slides}
				</Carousel>
				<Grid className={classes.productDisplayGrid}>
					<Grid.Col span={2}>
						<Grid>
							<Grid.Col>
								<Image src={data.image1} className={classes.productSelectImage} onClick={() => setDisplayImage((data.image1))}/>
							</Grid.Col>
							<Grid.Col>
								<Image src={data.image2} className={classes.productSelectImage} onClick={() => setDisplayImage((data.image2))}/>
							</Grid.Col>
							<Grid.Col>
								<Image src={data.image3} className={classes.productSelectImage} onClick={() => setDisplayImage((data.image3))}/>
							</Grid.Col>
							<Grid.Col>
								<Image src={data.image4} className={classes.productSelectImage} onClick={() => setDisplayImage((data.image4))}/>
							</Grid.Col>
							<Grid.Col>
								<Image src={data.image5} className={classes.productSelectImage} onClick={() => setDisplayImage((data.image5))}/>
							</Grid.Col>
						</Grid>
					</Grid.Col>
					<Grid.Col span={10}>
						<Image src={displayImage}/>
					</Grid.Col>
				</Grid>
			</Grid.Col>
			<Grid.Col span={{base: 12, lg: 6}}>
				<Grid>
					<Grid.Col>
						<Container my="lg" className={classes.productSecondGridHeader}>
							<Text>
								Adidas
							</Text>
							<Text fz="25px" fw="500">
								{(data.title).toUpperCase()}
							</Text>
						</Container>
						<Container mb="md">
							<Select
								size="md"
								label="Select Size"
								placeholder="Choose Size"
								data={['5', '6', '7', '8', '9', '10', '11', '12']}
							/>
						</Container>
					</Grid.Col>
					<Grid.Col>
						<Container mb="md">
							<Text fz="25px" fw="500">
								£{data.price}
							</Text>
						</Container>
					</Grid.Col>
					<Grid.Col>
						<Container>
							<Button size={'md'} fullWidth variant={'filled'}>
								ADD TO BAG
							</Button>
						</Container>
					</Grid.Col>
					<Grid.Col>
						<Container my="lg">
							<Accordion>
								<Accordion.Item value="premiumDelivery">
									<Accordion.Control>
										<Group>
											<Image src={'https://www.laced.com/packs/static/app/assets/images/rebrand/ui_conceptuals/usp_speed-70f7231d48ddc9ecf0a2.svg'} alt={'delivery icon'}
												   width={50} height={50}/>
											<Text>
												PREMIUM DELIVERY
											</Text>
										</Group>
									</Accordion.Control>
									<Accordion.Panel>
										<Text>
											The Cube items are all available for immediate delivery.
										</Text>
										<List>
											<List.Item>Authenticity guaranteed</List.Item>
											<List.Item>Our fastest delivery option</List.Item>
											<List.Item>Order before 7am for next-day delivery</List.Item>
										</List>
									</Accordion.Panel>
								</Accordion.Item><Accordion.Item value="2">
								<Accordion.Control>
									<Group>
										<Image src={'https://www.laced.com/packs/static/app/assets/images/rebrand/ui_conceptuals/usp_authenticity-925cecbe4784dbeae21a.svg'} alt={'authenticity icon'}
											   width={50} height={50}/>
										<Text>
											AUTHENTICATED
										</Text>
									</Group>
								</Accordion.Control>
								<Accordion.Panel>
									<Text>
										Each item is carefully checked by our authentication team to guarantee authenticity.
									</Text>
								</Accordion.Panel>
							</Accordion.Item><Accordion.Item value="3">
								<Accordion.Control>
									<Group>
										<Image src={'https://www.laced.com/packs/static/app/assets/images/rebrand/ui_conceptuals/usp_new_unused-b9244567dbc2002bce10.svg'} alt={'sustainability icon'}
											   width={50} height={50}/>
										<Text>
											BRAND NEW & UNUSED
										</Text>
									</Group>
								</Accordion.Control>
								<Accordion.Panel>
									<Text>
										Every item is brand new, unused and in original packaging.
									</Text>
								</Accordion.Panel>
							</Accordion.Item>
							</Accordion>
						</Container>
					</Grid.Col>
					<Grid.Col>
						<Container mb="lg">
							<Text fz="20px" fw={500}>
								Description
							</Text>
							<Text>
								{data.description}
							</Text>
						</Container>
					</Grid.Col>
					<Grid.Col>
						<Container mb="50px">
							<Text fz="20px" fw={500}>
								Details
							</Text>
							<Flex justify={'space-between'} mt={'sm'}>
								<Text>Brand</Text>
								<Text>{data.brand}</Text>
							</Flex>
							<Divider my="md"/>
							<Flex justify={'space-between'}>
								<Text>Category</Text>
								<Text>{data.category}</Text>
							</Flex>
							<Divider my="md"/>
							<Flex justify={'space-between'}>
								<Text>Year released</Text>
								<Text>{data.yearReleased}</Text>
							</Flex>
							<Divider my="md"/>
							<Flex justify={'space-between'}>
								<Text>Colour</Text>
								<Text>{data.colour}</Text>
							</Flex>
						</Container>
					</Grid.Col>
				</Grid>
			</Grid.Col>
		</Grid>
	)
}