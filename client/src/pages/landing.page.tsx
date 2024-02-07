import {AppShell, Button, Flex, Title} from "@mantine/core";
import classes from '../styles/components/globalStyles.module.scss'
import {Header} from "../components/header.tsx";
import {HeroCarousel} from "../components/hero.carousel.tsx";
import {LatestProducts} from "../components/latestProducts.tsx";
import {BelowRetailPrice} from "../components/belowRetailPrice.tsx";
import {SneakerContainer} from "../components/sneaker.container.tsx";
import {StaffPicks} from "../components/staffPicks.tsx";
import {Footer} from "../components/footer.tsx";

export function LandingPage() {

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
				<HeroCarousel/>
				<SneakerContainer>
					<LatestProducts/>
					<BelowRetailPrice/>
					<StaffPicks/>
				</SneakerContainer>
			</AppShell.Main>
				<Footer/>
		</AppShell>

	)
}
