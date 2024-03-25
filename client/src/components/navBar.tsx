import { Container, NavLink, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
	const navigate = useNavigate();

	return (
		<>
			<NavLink href="#required-for-focus" onClick={() => navigate('/auth/login')} label="Login" />
			<NavLink href="#required-for-focus" onClick={() => navigate('/auth/sign-up')} label="Sign Up" />
			<NavLink href={'/'} defaultOpened label={'Brands'} childrenOffset={28}>
				<NavLink href="#required-for-focus" label="Air Jordan" />
				<NavLink href="#required-for-focus" label="Nike" />
				<NavLink href="#required-for-focus" label="New Balance" />
				<NavLink href="#required-for-focus" label="Yeezy" />
				<NavLink href="#required-for-focus" label="Adidas" />
			</NavLink>
			<NavLink href={'/'} defaultOpened label={'Categories'} mt={'xl'} childrenOffset={28}>
				<NavLink href="#required-for-focus" label="Air Jordan" />
				<NavLink href="#required-for-focus" label="Nike" />
				<NavLink href="#required-for-focus" label="New Balance" />
				<NavLink href="#required-for-focus" label="Yeezy" />
				<NavLink href="#required-for-focus" label="Adidas" />
			</NavLink>
		</>
	);
}
