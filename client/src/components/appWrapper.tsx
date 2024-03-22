import {AppShell} from "@mantine/core";
import classes from "../styles/components/globalStyles.module.scss";
import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import {Outlet} from "react-router-dom";
import {useHeaderNavbarStore} from "../shared/stores/headerNavbar.store.ts";
import {NavBar} from "./navBar.tsx";


export function AppWrapper() {
	const {navbarOpen} = useHeaderNavbarStore();
	return (
		<AppShell
			header={
				{
					height: {
						base: 60,
						sm: 60
					}
				}
			}
			navbar={{width: 300, breakpoint: 'sm', collapsed: {desktop: true, mobile: !navbarOpen}}}
		>
			<AppShell.Header className={classes.appShellHeader}>
				<Header/>
			</AppShell.Header>
			<AppShell.Navbar className={classes.appShellNavbar}>
				<NavBar/>
			</AppShell.Navbar>
			<AppShell.Main className={classes.appShellMain}>
				<div className={classes.bodyContent}>
					<Outlet/>
				</div>
			</AppShell.Main>
			<Footer/>
		</AppShell>

	)

}