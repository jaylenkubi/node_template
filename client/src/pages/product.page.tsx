import {Carousel} from "@mantine/carousel";

const data = {
	brand: 'adidas',
	title: 'Adidas Campus OOS Grey Gum',
	image1: 'https://laced.imgix.net/products/12add952-7272-4d1f-bda3-a63602e4d86c.jpg?auto=format&fit=crop&w=3246',
	image2: 'https://laced.imgix.net/products/bf1c92a8-4216-41a3-b7b8-49b1256193ed.jpg?auto=format&fit=crop&w=3246',
	image3: 'https://laced.imgix.net/products/7f4bba43-95e2-4d91-ba4c-7b75fbaccf1f.jpg?auto=format&fit=crop&w=3246',
	image4: 'https://laced.imgix.net/products/53e2db64-b7ee-47ef-801c-5d5bfe13c770.jpg?auto=format&fit=crop&w=3246',
	image5: 'https://laced.imgix.net/products/8748ab96-f84d-4c66-bc1e-1c1cb2a571d2.jpg?auto=format&fit=crop&w=3246',
	price: 129,
	description: 'Sporting a muted colourway and retro aesthetics, the adidas Campus 00s Grey Gum is fastened with the model’s signature oversized laces. Crafted with perforations for breathability, its suede base is detailed with leather stripes and a branded heel tab. Underfoot, the cushioned midsole delivers comfort and the gum rubber outsole provides grip. Finished with a padded tongue and collar, the adidas Campus 00s Grey Gum is available to buy and sell with Laced.',
	category: 'Campus 00s',
	colour: 'Grey',
}

export function ProductPage() {
	const slides = [data.image1, data.image2, data.image3, data.image4, data.image5].map((item) => (
		<Carousel.Slide key={item}>
			<img src={item} alt={data.title} />
		</Carousel.Slide>
	))
	return (
		<Carousel>
			{slides}
		</Carousel>
	)
}