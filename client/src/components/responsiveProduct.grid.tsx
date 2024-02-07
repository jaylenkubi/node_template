import {Button, Flex, Grid, Title} from "@mantine/core";
import {ProductCard} from "./product.card.tsx";

interface ResponsiveProductGridProps {
	products: any[],
	title: string
}

export function ResponsiveProductGrid({products, title}: ResponsiveProductGridProps) {
	return (
		<Grid gutter={'md'} mt={'40px'}>
			<Grid.Col>
				<Flex justify={'space-between'} align={'center'}>
					<Title order={5}>{title}</Title>
					<Button variant={"subtle"} size={'sm'}>See More</Button>
				</Flex>
			</Grid.Col>
			{products && (
				products.map((item) =>
					(<Grid.Col span={{base: 6, sm: 4, md: 3}}><ProductCard {...item} key={item.title}/></Grid.Col>
					))
			)}
		</Grid>
	)
}