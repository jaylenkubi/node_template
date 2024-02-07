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
				<Badge variant={'navBadge'}>Air Jordan</Badge>
				<Badge variant={'navBadge'}>Nike</Badge>
				<Badge variant={'navBadge'}>New Balance</Badge>
				<Badge variant={'navBadge'}>Yeezy</Badge>
				<Badge variant={'navBadge'}>Air Jordan 4</Badge>
				<Badge variant={'navBadge'}>Air Jordan 1</Badge>
			</Flex>
		</Container>
	</Container>)
}