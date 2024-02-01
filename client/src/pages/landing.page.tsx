import {AppShell} from "@mantine/core";
import classes from '../styles/components/globalStyles.module.scss'
import {Header} from "../components/header.tsx";
import {HeroCarousel} from "../components/hero.carousel.tsx";
import {LatestProducts} from "../components/latestProducts.tsx";

export function LandingPage() {

	return (
		<><AppShell
			header={
				{
					height: 150,
				}
			}
			footer={{height: 100}}
		>
			<AppShell.Header className={classes.appShellHeader}>
				<Header/>
			</AppShell.Header>
			<AppShell.Main className={classes.appShellMain}>
				<HeroCarousel/>
				<LatestProducts />
			</AppShell.Main>
		</AppShell>
		</>
	)
}
