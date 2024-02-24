import {Container, NavLink, UnstyledButton} from "@mantine/core";



export function NavBar() {

	return (

		<>
			<NavLink href={'/'} defaultOpened label={'Brands'} childrenOffset={28}
			>
				<NavLink href="#required-for-focus" label="Air Jordan" />
				<NavLink href="#required-for-focus" label="Nike" />
				<NavLink href="#required-for-focus" label="New Balance" />
				<NavLink href="#required-for-focus" label="Yeezy" />
				<NavLink href="#required-for-focus" label="Adidas" />
			</NavLink>
			<NavLink href={'/'} defaultOpened label={'Categories'} mt={'xl'} childrenOffset={28}
			>
				<NavLink href="#required-for-focus" label="Air Jordan" />
				<NavLink href="#required-for-focus" label="Nike" />
				<NavLink href="#required-for-focus" label="New Balance" />
				<NavLink href="#required-for-focus" label="Yeezy" />
				<NavLink href="#required-for-focus" label="Adidas" />
			</NavLink>
		</>
	)
}