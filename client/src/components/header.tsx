import {Badge, Button, Container, Flex, Group, Text} from "@mantine/core";
import classes from "../styles/components/header.module.scss";
import {useNavigate} from "react-router-dom";

export function Header() {

	const navigate = useNavigate()
	return (<Container size={'xxl'}>
		<Container size="xxl" className={classes.mainSection}>
			<Flex justify="space-between" h="100%" align={'center'}>
				<Text onClick={() => navigate('/')}>The Cube</Text>
				<Group>
					<Button variant={'outline'} size={'sm'} onClick={() => navigate('/auth/sign-up')}>Sign up</Button>
					<Button variant={'filled'} size={'sm'}  onClick={() => navigate('/auth/login')}>Log in</Button>
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