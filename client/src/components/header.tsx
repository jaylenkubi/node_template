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
							<Button variant={'subtle'}><Text>Air Jordan</Text></Button>
							<Button variant={'subtle'}><Text>Nike</Text></Button>
							<Button variant={'subtle'}><Text>New Balance</Text></Button>
							<Button variant={'subtle'}><Text>Yeezy</Text></Button>
							<Button variant={'subtle'}><Text>Air Jordan 4</Text></Button>
							<Button variant={'subtle'}><Text>Air Jordan 1</Text></Button>
						</Group>
					</div>
					<Group>
						<Button variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/sign-up')}><Text>Sign up</Text></Button>
						<Button variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/login')}><Text>Log in</Text></Button>
					</Group>
				</Flex>
			</div>
		</>
	)
}