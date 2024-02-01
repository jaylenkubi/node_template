import {Carousel} from "@mantine/carousel";
import {Button, Container, Paper, Text, Title} from "@mantine/core";
import classes from "../styles/components/heroCarousel.module.scss";

const data = [
	{imageUrl: 'https://laced.imgix.net/slider_images/c3cb5527-c6fb-4dbd-9060-d9efba3eba7a?auto=format&fit=crop&ixlib=react-8.6.4&h=550&w=900&q=75&dpr=1', title: 'Casa Way', description: 'In now'},
	{imageUrl: 'https://laced.imgix.net/slider_images/be26f5d9-4955-442a-bfaf-bd14f5de4910?auto=format&fit=crop&ixlib=react-8.6.4&h=550&w=900&q=75&dpr=1', title: 'Needles', description: 'In now'},
	{imageUrl: 'https://laced.imgix.net/slider_images/ae8bd090-035f-4968-8c50-bef70121618f?auto=format&fit=crop&ixlib=react-8.6.4&h=550&w=900&q=75&dpr=1', title: 'WTAP', description: 'In now'},
	{imageUrl: 'https://laced.imgix.net/slider_images/6846a8c0-ceeb-4b91-8761-7eed5c73074d?auto=format&fit=crop&ixlib=react-8.6.4&h=550&w=900&q=75&dpr=1', title: 'Most Wanted', description: 'In now'},
]

interface CardProps {
	imageUrl: string;
	title: string;
	description: string;
}

function Card({imageUrl, title, description}: CardProps) {
	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			style={{backgroundImage: `url(${imageUrl})`}}
			className={classes.heroPaper}
		>
			<div>
				<Text size="xs">
					{description}
				</Text>
				<Title order={3}>
					{title}
				</Title>
			</div>
			<Button variant={'filled'}>
				Shop Now
			</Button>
		</Paper>
	);
}

export function HeroCarousel() {
	const slides = data.map((item) => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
			<Carousel className={classes.heroContainer}>
				{slides}
			</Carousel>
	)
}
