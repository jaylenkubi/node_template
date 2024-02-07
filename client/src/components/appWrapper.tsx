import {AppShell} from "@mantine/core";
import classes from "../styles/components/globalStyles.module.scss";
import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import {Outlet} from "react-router-dom";


export function AppWrapper() {
	return (
		<AppShell
			header={
				{
					height: 150,
				}
			}
		>
			<AppShell.Header className={classes.appShellHeader}>
				<Header/>
			</AppShell.Header>
			<AppShell.Main className={classes.appShellMain}>
				<Outlet/>
			</AppShell.Main>
			<Footer/>
		</AppShell>

	)

}