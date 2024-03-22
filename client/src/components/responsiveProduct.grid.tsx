import {Button, Container, Flex, Grid, Group, Title} from "@mantine/core";
import {ProductCard} from "./product.card.tsx";

interface ResponsiveProductGridProps {
	products: any[],
	title: string
}

export function ResponsiveProductGrid({products, title}: ResponsiveProductGridProps) {
	return (
		<div style={{marginTop: 'var(--mantine-spacing-xxl)'}}>
			<Flex justify={'space-between'}>
				<Title order={5}>{title}</Title>
				<Button variant={"subtle"} size={'sm'}>See More</Button>
			</Flex>
			<Grid>
				{products && (
					products.map((item) =>
						(<Grid.Col span={{base: 6, sm: 4, md: 3, lg: 2}} key={item.title}><ProductCard {...item} key={item.title}/></Grid.Col>
						))
				)}
			</Grid>
		</div>
	)
}