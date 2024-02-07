import {HeroCarousel} from "../components/hero.carousel.tsx";
import {LatestProducts} from "../components/latestProducts.tsx";
import {BelowRetailPrice} from "../components/belowRetailPrice.tsx";
import {SneakerContainer} from "../components/sneaker.container.tsx";
import {StaffPicks} from "../components/staffPicks.tsx";

export function HomePage() {

	return (
		<>
			<HeroCarousel/>
			<SneakerContainer>
				<LatestProducts/>
				<BelowRetailPrice/>
				<StaffPicks/>
			</SneakerContainer>
		</>

	)
}
