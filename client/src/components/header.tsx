import {Badge, Button, Container, Flex, Group, Text} from "@mantine/core";
import classes from "../styles/components/header.module.scss";

export function Header() {
	return (<Container size={'xxl'}>
		<Container size="xxl" className={classes.mainSection}>
			<Flex justify="space-between" h="100%" align={'center'}>
				<Text>The Cube</Text>
				<Group>
					<Button variant={'outline'}>Sign up</Button>
					<Button variant={'filled'}>Log in</Button>
				</Group>
			</Flex>
		</Container>
		<Container size="xxl" className={classes.badgeSection}>
			<Flex justify={'space-around'}>
				<Badge variant={'outline'}>Air Jordan</Badge>
				<Badge variant={'outline'}>Nike</Badge>
				<Badge variant={'outline'}>New Balance</Badge>
				<Badge variant={'outline'}>Yeezy</Badge>
				<Badge variant={'outline'}>Air Jordan 4</Badge>
				<Badge variant={'outline'}>Air Jordan 1</Badge>
			</Flex>
		</Container>
	</Container>)
}