import {Badge, Burger, Button, Container, Flex, Group, Text} from "@mantine/core";
import classes from "../styles/components/header.module.scss";
import {useNavigate} from "react-router-dom";
import {useDisclosure} from "@mantine/hooks";
import {useHeaderNavbarStore} from "../shared/stores/headerNavbar.store.ts";

export function Header() {
	const {navbarOpen, toggleNavbar} = useHeaderNavbarStore()
	const navigate = useNavigate()
	return (
		<>
			<div className={classes.mainSection}>
				<Flex justify="space-between" h="100%" align={'center'}>
					<Group>
						<Burger opened={navbarOpen} onClick={toggleNavbar} hiddenFrom="sm" size="sm"/>
						<Text onClick={() => navigate('/')}>The Cube</Text>
					</Group>
					<Flex>
						<Button variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/sign-up')}>Sign up</Button>
						<Button variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/login')}>Log in</Button>
					</Flex>
				</Flex>
			</div>
			<div  className={classes.badgeSection}>
				<Flex justify={'space-around'}>
					<Badge variant={'navBadge'}>Air Jordan</Badge>
					<Badge variant={'navBadge'}>Nike</Badge>
					<Badge variant={'navBadge'}>New Balance</Badge>
					<Badge variant={'navBadge'}>Yeezy</Badge>
					<Badge variant={'navBadge'}>Air Jordan 4</Badge>
					<Badge variant={'navBadge'}>Air Jordan 1</Badge>
				</Flex>
			</div>
		</>
	)
}