import { Burger, Button, Flex, Group, Text, useMantineTheme } from '@mantine/core';
import classes from '../styles/components/header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useHeaderNavbarStore } from '../shared/stores/headerNavbar.store.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export function Header() {
	const theme = useMantineTheme()
	const {navbarOpen, toggleNavbar} = useHeaderNavbarStore()
	const navigate = useNavigate()
	return (
		<>
			<div className={classes.mainSection}>
				<Flex justify="space-between" h="100%" align={'center'}>
					<Group>
						<Burger opened={navbarOpen} onClick={toggleNavbar} hiddenFrom="md" size="sm"/>
						<Text onClick={() => navigate('/')} fw={600} size={'xl'} style={{cursor: 'pointer'}}>The Cube</Text>
					</Group>
					<div className={classes.badgeSection}>
						<Group gap="xl">
							<Button variant={'subtle'}><Text>Air Jordan</Text></Button>
							<Button variant={'subtle'}><Text>Nike</Text></Button>
							<Button variant={'subtle'}><Text>New Balance</Text></Button>
							<Button variant={'subtle'}><Text>Yeezy</Text></Button>
							<Button variant={'subtle'}><Text>Air Jordan 4</Text></Button>
							<Button variant={'subtle'}><Text>Air Jordan 1</Text></Button>
						</Group>
					</div>
					<Group gap="xl">
						<Button className={classes.badgeSection} variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/sign-up')}><Text>Sign up</Text></Button>
						<Button className={classes.badgeSection} variant={'subtle'} size={'sm'} onClick={() => navigate('/auth/login')}><Text>Log in</Text></Button>
						<FontAwesomeIcon icon={faSearch} />
						<FontAwesomeIcon icon={faShoppingCart} onClick={() => navigate('/shopping-bag')}/>
					</Group>

				</Flex>
			</div>
		</>
	)
}