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
					<div className={classes.badgeSection}>
						<Group>
							<Button variant={'subtle'}>Air Jordan</Button>
							<Button variant={'subtle'}>Nike</Button>
							<Button variant={'subtle'}>New Balance</Button>
							<Button variant={'subtle'}>Yeezy</Button>
							<Button variant={'subtle'}>Air Jordan 4</Button>
							<Button variant={'subtle'}>Air Jordan 1</Button>
						</Group>
					</div>
					<Group>
						<Button variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/sign-up')}>Sign up</Button>
						<Button variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/login')}>Log in</Button>
					</Group>
				</Flex>
			</div>
		</>
	)
}