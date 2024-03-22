import {Button, Card, CardSection, Flex, Grid, Image, Title} from "@mantine/core";


const data = [
	{
		imageUrl: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt15cdacdfa2105135/658490940543c5ad808f0e49/under350.jpg?quality=50&auto=webp&format=pjpg&dpr=3&width=234&height=160'
	},{
		imageUrl: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt22f7a8c9e7524b30/658479754dad1574abe54242/under250.jpg?quality=50&auto=webp&format=pjpg&dpr=3&width=234&height=160'
	},{
		imageUrl: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltf142f6ebb9762620/658479a2b0fbcb2d6c626541/under150.jpg?quality=50&auto=webp&format=pjpg&dpr=3&width=234&height=160'
	},{
		imageUrl: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt6a584eb1c889aeff/654919abb42e39040a69995b/converse.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=234&height=160'
	}
]
interface StaffPicksProps {
	source: string
}

function StaffPickCard({source}: StaffPicksProps) {
	return (
		<Card>
			<CardSection>
				<Image src={source}/>
			</CardSection>
		</Card>
	)
}

export function StaffPicks() {
	const cards = data.map((item) =><Grid.Col span={{base: 6, sm: 4, md: 3}}> <StaffPickCard key={item.imageUrl} source={item.imageUrl} /></Grid.Col>)
	return (
		<Grid gutter={'md'} mt={'xxl'}>
			<Grid.Col>
					<Title order={5}>Staff Picks</Title>
			</Grid.Col>
			{cards}</Grid>
	)
}