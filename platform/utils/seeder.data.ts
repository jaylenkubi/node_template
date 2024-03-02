import {SneakerSizeEnum} from "../schemas/sneaker.schema";


export const brands = [
	{
		name: "Yeezy",
		description: "After successful tenures with Nike, Louis Vuitton and BAPE, Yeezys next collaboration came with adidas. Kanye West would finally have the creative freedom he craved, designing Yeezy trainers brand new silhouettes that include the Yeezy 350, Yeezy 500 and Yeezy 700 Browse our selection of Yeezy shoes and find the next pair of kicks for your rotation!."
	},
	{
		name: "New Balance",
		description: "Leaving its “Dad Shoe” reputation behind, New Balance is taking over the game as one of the most in-demand sneaker brands of the moment. Thanks to Teddy Santis’ Aimé Leon Dore, the New Balance 550 has made the greatest comeback of the decade, with A-listers and fashion insiders across the globe trying to get their hands on the latest pair of New Balance trainers. You’ve already seen the streamlined New Balance 327 take over your Instagram feed, and the next NB silhouettes to demand a spot in your rotation are the New Balance 2002R and the New Balance 827. Want more? Discover our collection of the most coveted New Balance sneakers below."
	},
	{
		name: "Nike",
		description: "Founded back in 1964, Oregon-born brand Nike is now recognised as the world’s largest supplier of athletic sneakers. Offering an array of sporty silhouettes including the iconic Dunk and fan-favourite Air Force 1s, many Nike models are now also firmly rooted in the foundations of streetwear style. From everyday classics to exclusive collaborations, discover our extensive range of Nike trainers now."
	}, {
		name: "Adidas",
		description: "Synonymous with sportswear, design and game-changing technology, adidas is one of the most influential brands of all time. Founded by Adi Dassler in 1949, the German label redefined the sneaker sphere by bringing a new edge to football shoes and revolutionising the industry. Today, adidas continues to inform the direction of fashion with its ever-growing catalogue of icons. From the classic Stan Smith to retro-inspired Sambas, discover our collection of the most coveted adidas releases."
	},
	{
		name: "Air Jordan",
		description: "Nike Jordans are beyond iconic - these retro sneakers were produced exclusively for Michael Jordan in 1984. The highly anticipated Jordans sneaker was released to the public on April 1, 1985 and due to their bold colours and timeless designs, have never lost their appeal. Gone are the days when trainers were predominantly for men, Nike Air Jordans are highly sought after by men, women and juniors. What are you waiting for? “Make It Happen” - Michael Jordan"
	},
]

export const categories = [
	{
		name: "Yeezy 350"   // 1
	}, {
		name: "Yeezy Slides"  // 2
	}, {
		name: "Yeezy 500"     // 3
	}, {
		name: "Yeezy 700"     // 4
	}, {
		name: "Yeezy 380"     // 5
	}, {
		name: "New Balance 550" // 6
	}, {
		name: "New Balance 530" // 7
	}, {
		name: "New Balance 580" // 8
	}, {
		name: "New Balance 9060" // 9
	}, {
		name: "New Balance 2002R" // 10
	}, {
		name: "Nike Dunk" // 11
	}, {
		name: "Nike Air Force" // 12
	}, {
		name: "Nike Air Max" // 13
	}, {
		name: "Nike Vapormax" // 14
	}, {
		name: "Nike Cortez" // 15
	}, {
		name: "Adidas Campus" // 16
	}, {
		name: "Adidas Samba" // 17
	}, {
		name: "Adidas Slides" // 18
	}, {
		name: "Adidas Ultraboots" // 19
	}, {
		name: "Adidas NMD" // 20
	}, {
		name: "Air Jordan 1" // 21
	}, {
		name: "Ari Jordan 3" // 22
	}, {
		name: "Ari Jordan 4" // 23
	}, {
		name: "Ari Jordan 11" // 24
	}, {
		name: "Ari Jordan 13" // 25
	},
]

export const sneakers = [
	{
		name: "Yeezy Boost 350 V2 onyx",
		description: "Dressed in an all-black colourway, the Yeezy Boost 350 V2 Onyx presents a versatile iteration of the well-loved 350 V2 model. Its breathable Primeknit upper is complete with a mesh sidewall stripe as well as a handy pull tab at the heel. Underfoot, Boost midsole offers comfort and the semi-translucent outsole allows for grip. Fastened with an integrated lacing system, the Yeezy Boost 350 V2 Onyx is available to buy and sell with Laced.",
		brandId: 1,
		colour: "Black",
		releaseDate: "2022-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ONYX-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ONYX-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ONYX-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ONYX-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ONYX-4.avif"
			}
		],
		sneakerSizes: [
			{
				price: "352",
				sneakerSize: SneakerSizeEnum.FIVE,
				quantityInStock: 1000
			}, {
				price: "310",
				sneakerSize: SneakerSizeEnum.FIVE_5,
				quantityInStock: 1000
			}, {
				price: "290",
				sneakerSize: SneakerSizeEnum.SIX,
				quantityInStock: 1000
			}, {
				price: "305",
				sneakerSize: SneakerSizeEnum.SIX_5,
				quantityInStock: 1000
			}, {
				price: "300",
				sneakerSize: SneakerSizeEnum.SEVEN,
				quantityInStock: 1000
			}, {
				price: "280",
				sneakerSize: SneakerSizeEnum.SEVEN_5,
				quantityInStock: 1000
			}, {
				price: "275",
				sneakerSize: SneakerSizeEnum.EIGHT,
				quantityInStock: 1000
			}, {
				price: "270",
				sneakerSize: SneakerSizeEnum.EIGHT_5,
				quantityInStock: 1000
			}, {
				price: "270",
				sneakerSize: SneakerSizeEnum.NINE,
				quantityInStock: 1000
			}, {
				price: "280",
				sneakerSize: SneakerSizeEnum.NINE_5,
				quantityInStock: 1000
			}, {
				price: "270",
				sneakerSize: SneakerSizeEnum.TEN,
				quantityInStock: 1000
			},
		]
	}, {
		name: "Yeezy Boost 350 V2 Bone",
		description: "The crowd-favourite Yeezy sneaker that took over the game when it launched in 2015, the Yeezy Boost 350 is a shoedrobe essential and the Yeezy Boost 350 V2 Bone is no exception. Dressed in a crisp white hue, the upper of the Yeezy Bone is crafted from breathable, flexible fly knit with a handle on the back for easy on-and-off. Up top the Yeezy 350 Bone, a secure lace-up fastening allows you to tighten or loosen the fit, while industry-leading Boost cushioning is fitted underfoot for enhanced comfort with every step you take in the Yeezy 350 V2 Bone. An everyday essential, add the Yeezy Boost 350 V2 Bone to your collection now.",
		brandId: 1,
		colour: "White",
		releaseDate: "2022-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BONE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BONE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BONE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BONE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BONE-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Carbon Beluga",
		description: "Presenting an updated take on an iconic Yeezy colourway, the Yeezy Boost 350 V2 Carbon Beluga will instantly elevate any everyday outfit. Its speckled Primeknit upper features a contrasting orange stripe complete with SPLY-350 lettering. Rounded off with Boost cushioning, a signature ribbed sole unit and rope-style laces, the Yeezy Boost 350 V2 Carbon Beluga is available to buy and sell with Laced.",
		brandId: 1,
		colour: "Orange",
		releaseDate: "2023-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CARBON%20BELUGA-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CARBON%20BELUGA-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CARBON%20BELUGA-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CARBON%20BELUGA-4.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Bred",
		description: "Dressed in a bold two-toned colourway, the Yeezy Boost 350 V2 Bred is one of the most iconic designs in the Yeezy range. Its black Primeknit upper is complete with SPLY-350 lettering and a handy pull tab at the heel. Padding in the collar adds extra support and the integrated lacing system allows for a tailored fit. Boost cushioning in the midsole offers comfort, while the rubber outsole delivers effective grip. Buy and sell the Yeezy Boost 350 V2 Bred with Laced.",
		brandId: 1,
		colour: "Black",
		releaseDate: "2017-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BRED-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BRED-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BRED-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BRED-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BRED-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Zebra",
		description: "Boasting an animal-inspired colourway, the Yeezy Boost 350 V2 Zebra presents a more intricate take on the popular 350 V2 silhouette. Its breathable Primeknit upper takes on a black and white pattern as well as red SPLY-350 lettering. Underfoot, Boost cushioning delivers comfort and the rubber outsole provides grip. Padding in the collar adds extra support, the pull tab allows for an easy on and off and the integrated lacing system means for a tailored fit. Find your size with Laced.",
		brandId: 1,
		colour: "White",
		releaseDate: "2022-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ZEBRA-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ZEBRA-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ZEBRA-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ZEBRA-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20ZEBRA-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Dazzling Blue",
		description: "Famed for being Ye’s — formerly known as Kanye West — debut silhouette with adidas, the Yeezy Boost 350 has secured its place in the sneaker hall of fame, and the Yeezy Boost 350 V2 Dazzling Blue is next in line to demand a spot in your collection. The flexible upper is crafted from a durable knit with SPLY-350 emblazoned across the side of the shoe on a blue band. Utility-style laces are added so you can tighten or loosen the fit, but the star of the show is the adidas Boost cushioning added underfoot. Comfortable, functional and timeless, add the Yeezy Boost 350 V2 Dazzling Blue to your collection and you’ll never want to take them off.",
		brandId: 1,
		colour: "White",
		releaseDate: "2022-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20DAZZLING%20BLUE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20DAZZLING%20BLUE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20DAZZLING%20BLUE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20DAZZLING%20BLUE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20DAZZLING%20BLUE-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Cream Triple White",
		description: "Boasting a neutral monochrome colourway, the Yeezy Boost 350 V2 Cream Triple White presents an updated take on the classic 350 silhouette. Its breathable Primeknit upper is complete with an integrated lacing system and a pull tab at the heel. Underfoot, the Boost midsole offers comfort and the semi-translucent rubber outsole provides grip. Finished with padding in the collar for extra cushioning, the Yeezy Boost 350 V2 Cream Triple White is available to buy and sell with Laced.",
		brandId: 1,
		colour: "White",
		releaseDate: "2017-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CREAM%20TRIPLE%20WHITE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CREAM%20TRIPLE%20WHITE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CREAM%20TRIPLE%20WHITE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CREAM%20TRIPLE%20WHITE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20CREAM%20TRIPLE%20WHITE-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Granite",
		description: "Sporting a muted colourway, the Yeezy Boost 350 V2 Granite will match any of your everyday outfits. Its breathable Primeknit upper is detailed with SPLY-350 lettering and also features a traditional lacing system. Underfoot, its ribbed rubber sole unit houses Boost cushioning and offers effective grip on a range of terrains. Shop the Yeezy Boost 350 V2 Granite with Laced now.",
		brandId: 1,
		colour: "Silver",
		releaseDate: "2023-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20GRANITE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20GRANITE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20GRANITE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20GRANITE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20GRANITE-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Red",
		description: "The crowd-favourite Yeezy sneaker that took over the game when it launched in 2015, the Yeezy Boost 350 is a shoedrobe essential and the Yeezy Boost 350 V2 Bone is no exception. Dressed in a crisp white hue, the upper of the Yeezy Bone is crafted from breathable, flexible fly knit with a handle on the back for easy on-and-off. Up top the Yeezy 350 Bone, a secure lace-up fastening allows you to tighten or loosen the fit, while industry-leading Boost cushioning is fitted underfoot for enhanced comfort with every step you take in the Yeezy 350 V2 Bone. An everyday essential, add the Yeezy Boost 350 V2 Bone to your collection now.",
		brandId: 1,
		colour: "White",
		releaseDate: "2022-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20RED-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20RED-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20RED-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20RED-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20RED-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Beluga Reflective",
		description: "One of the most in-demand silhouettes to come out of the adidas x Yeezy partnership, the Yeezy Boost 350 V2 Beluga Reflective ticks every single box. Up top, a grey-toned tight knit fabric hugs your foot like a glove, while contrasting orange SPLY-350 branding on the sidewalls gives that futuristic look Yeezys are known for. Thick rope-style laces put you in control of the fit, while signature adidas Boost cushioning underfoot delivers unrivalled comfort. Easy to wear thanks to its speckled grey upper, the Yeezy Boost 350 V2 Beluga Reflective will see you from the gym to brunch and beyond in style.",
		brandId: 1,
		colour: "Orange",
		releaseDate: "2021-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BELUGA%20REFLECTIVE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BELUGA%20REFLECTIVE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BELUGA%20REFLECTIVE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BELUGA%20REFLECTIVE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20BELUGA%20REFLECTIVE-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Jade Ash",
		description: "Refreshing the updated 350 model, the Yeezy Boost 350 V2 Jade Ash boasts an all-new two-toned colourway. The breathable Primeknit upper is decorated with a black stripe that features minimal branding. Underfoot, the Boost midsole offers comfort and the rubber outsole provides grip. Internal padding delivers extra cushioning and the integrated lacing system puts you in control of the fit. Complete with a sock-like collar, buy and sell the Yeezy Boost 350 V2 Jade Ash with Laced.",
		brandId: 1,
		colour: "White",
		releaseDate: "2022-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20JADE%20ASH-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20JADE%20ASH-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20JADE%20ASH-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20JADE%20ASH-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20JADE%20ASH-5.avif"
			}
		]
	}, {
		name: "Yeezy Boost 350 V2 Semi Frozen Yellow",
		description: "First hitting stores in November 2017, the Yeezy Boost 350 V2 Semi Frozen Yellow thanks to numerous leaks across Instagram and Twitter was unveiled several months before anything was confirmed by Kanye and Adidas, but this only helped the release gather hype like a freight train through 2017. The Semi Frozen Yellows bright neon colourway is sure to cause a splash in the last few months of 2017 heading into 2018, arguably the most controversial ‘SPLY-V2' yet and said to be the most limited. Whether you are a fan or a critique Kanye very much takes the stance that all publicity is good publicity, and you can't argue everyone is taking notice. Drawing similarities with the much acclaimed ‘Zebra' colourway think of the Semi Frozen Yellow as the Zebra on acid. The highlighter yellow is really the star of the show, but this shoe is still adorned with all the classic Yeezy 350 trimming you would expect from an item coming out of this continuingly groundbreaking and modern portfolio.",
		brandId: 1,
		colour: "White",
		releaseDate: "2017-01-01",
		categoryIds: [1],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20SEMI%20FROZEN%20YELLOW-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20SEMI%20FROZEN%20YELLOW-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20SEMI%20FROZEN%20YELLOW-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20SEMI%20FROZEN%20YELLOW-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20BOOST%20350%20V2%20SEMI%20FROZEN%20YELLOW-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Onyx",
		description: "A minimalist shoe that’s as versatile as it is modern, the Yeezy Slide Onyx is crafted from a uniquely designed EVA foam. The shoe features meticulously placed grooves that support your foot in all the right places, while a serrated sole ensures grip wherever you decide to wear them. Staying true to Kanye West’s style, branding is kept to a minimum, with a simple adidas Three-Stripe logo stamped on the inside for good measure. Easy to style and perfect for the days you need to just get up and go, add the Yeezy Slide Onyx to your collection and you’ll wonder how you ever lived without them.",
		brandId: 1,
		colour: "Black",
		releaseDate: "2022-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Slate Grey",
		description: "Taking on a muted colourway, the Yeezy Slides Slate Grey presents a lightweight and easy-to-style pair perfect for off-duty days. Crafted from lightweight EVA foam, the slip-on silhouette is detailed with subtle branding. The moulded footbed offers comfort with every wear, while the ridged outsole allows for effective grip. Buy and sell the Yeezy Slides Slate Grey with Laced",
		brandId: 1,
		colour: "Black",
		releaseDate: "2023-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20GREY-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20GREY-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20GREY-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20GREY-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20GREY-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Bone",
		description: "Versatile and lightweight, the minimalist Yeezy Slide Bone (2022 Restock) will match many outfits in a closet while feeling as light as a feather on your feet. The much-loved design is soft, comfortable and durable, featuring injected EVA foam and a ridged sole to improve traction, impact protection, and grip when worn indoors or outdoors. Also, the adidas Three Stripes logo subtly appears on the back heel footbed. The simple yet effective slide will provide a comfy fit on the streets, by the pool, or on the beach.",
		brandId: 1,
		colour: "Bone",
		releaseDate: "2022-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20BONE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20BONE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20BONE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20BONE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20BONE-5.avif"
			}
		]
	},
	{
		name: "Yeezy Slide Azure",
		description: "A slip-on style with endless outfitting potential, the Yeezy Slide Azure puts a colourful spin on one of the brand’s bestselling silhouettes. Crafted from injected EVA foam, this slide features a contoured footbed for comfort, an open toe for breathability and a serrated sole for grip. Presented in a bold blue hue, the Yeezy Slide Azure is destined for poolside lounging and off-duty dressing alike.",
		brandId: 1,
		colour: "Blue",
		releaseDate: "2023-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20AZURE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20AZURE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20AZURE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20AZURE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20AZURE-5.avif"
			}
		]

	}, {
		name: "Yeezy Slide Marine",
		description: "Taking on a muted blue colourway, the Yeezy Slide Slate Marine champions minimalistic aesthetics and timeless appeal. Featuring a moulded footbed detailed with understated branding, the EVA foam Slide also has a serrated outsole for grip on a range of terrains. Lightweight, versatile and easy to style, the Yeezy Slide Slate Marine is available to buy and sell with Laced.",
		brandId: 1,
		colour: "Blue",
		releaseDate: "2023-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20MARINE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20MARINE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20MARINE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20MARINE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20SLATE%20MARINE-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Granite",
		description: "A minimalist shoe that’s as versatile as it is modern, the Yeezy Slide Onyx is crafted from a uniquely designed EVA foam. The shoe features meticulously placed grooves that support your foot in all the right places, while a serrated sole ensures grip wherever you decide to wear them. Staying true to Kanye West’s style, branding is kept to a minimum, with a simple adidas Three-Stripe logo stamped on the inside for good measure. Easy to style and perfect for the days you need to just get up and go, add the Yeezy Slide Onyx to your collection and you’ll wonder how you ever lived without them.",
		brandId: 1,
		colour: "Black",
		releaseDate: "2-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GRANITE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GRANITE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GRANITE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GRANITE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Flax",
		description: "Presenting an earthy take on the classic Yeezy Slide, the brown Yeezy Slide Flax silhouette is bold yet subtle, complementing the iconic brand’s past iterations. Released in August 2022, the minimalist slip-on features a uniform upper and serrated bottom. Debossed adidas three-stripe branding appears on the back heel footbed. Comfort is always on the cards with an EVA-infused foam construction, ensuring the slip-on shoes feel light on your feet.",
		brandId: 1,
		colour: "Brown",
		releaseDate: "2022-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20FLAX-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20FLAX-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20FLAX-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20FLAX-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20FLAX-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Resin",
		description: "Everyone should have at least one pair of Yeezys in their wardrobe, and the new Yeezy Slides Resin 2022 iteration is a great place to start. The Yeezy Slides model has been making waves since its release in 2019 and continues to do so with the Resin 2022 design. The sage green colourway offers a minimalistic style synonymous with Yeezy, and the ever-so-subtle adidas Three Stripes stamp appears on the soft footbed. Like most Yeezy footwear, comfort is almost guaranteed, as the stylish sliders feature EVA-infused foam. Also, the single forefoot strap makes them easy to slip on your feet, and the rugged outsole has thick horizontal ridges to improve traction, grip, and impact protection when walking indoors or outdoors.",
		brandId: 1,
		colour: "Green",
		releaseDate: "2022-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDES%20RESIN%202022-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDES%20RESIN%202022-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDES%20RESIN%202022-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDES%20RESIN%202022-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDES%20RESIN%202022-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Pure",
		description: "A minimalist slide that’s perfect for every day, the Yeezy Slide Pure 2021 boasts a streamlined design and the only stand-out decoration is the Three-Stripes adidas logo on the inside. A serrated sole ensures grip, while the moulded grooves on the inside have been expertly shaped to support your foot where it needs it most. Presented in a dark beige colourway that’s reminiscent of Kanye West’s signature style, the Yeezy Slide Pure 2021 is perfect for poolside days or effortless at-home styling.",
		brandId: 1,
		colour: "Cream",
		releaseDate: "2021-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20PURE%202021-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20PURE%202021-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20PURE%202021-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20PURE%202021-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20PURE%202021-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Glow Green",
		description: "Fans of Kanye West’s iconic Yeezy range rejoice with the new 2022 version of the Yeezy Slide, here in eye-catching glowing green. The Yeezy Slide Glow Green 2022 is a sandal built for comfort and set to make a bold impression thanks to the bright hue it proudly shows off. The slip-on displays the luminescent green throughout in block colour, still complete with the EVA foam build Yeezy fans will know and love. The whole slide comes in a smooth, minimalistic design without branding elements or further colours, while the sole switches from the smooth finish to a grooved offering that provides support and traction, as well as shock absorption with every step. For Yeezy fans of bright and bold, this is the shoe for you.",
		brandId: 1,
		colour: "Green",
		releaseDate: "2022-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GLOW%20GREEN-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GLOW%20GREEN-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GLOW%20GREEN-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GLOW%20GREEN-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20GLOW%20GREEN-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Ochre",
		description: "An everyday staple that’s destined for your collection, the Yeezy Slide Ochre is crafted from injected EVA foam that’s durable and flexible in equal measure. Expertly designed grooves are added underfoot to support your every step, while a serrated sole delivers grip wherever you go. Simple and refined, the only branding comes in the form of an adidas Three-Stripe logo on the inside, while the clean Ochre colour nods to Kanye West’s penchant for neutral hues. A must-have, add the Yeezy Slide Ochre to your collection now.",
		brandId: 1,
		colour: "Brown",
		releaseDate: "2021-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20OCHRE-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20OCHRE-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20OCHRE-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20OCHRE-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20OCHRE-5.avif"
			}
		]
	}, {
		name: "Yeezy Slide Enflame Ornage",
		description: "The Yeezy Slide is the beach-ready option from the Kanye West and Adidas collaboration, with the silhouette quickly becoming the must-have footwear for sneakerheads across the globe. The team are scheduled for one of the biggest releases of the Yeezy Slide we have ever seen, with five colourways dropping. We see the return of the Resin and Pure colourways, whilst 'Ye also adds Enfora Blue, Enflame Orange and Glow Green to the collection. The Yeezy Slide is known for its unbeatable comfort and minimalist aesthetics, thanks to the single piece of EVA Foam the silhouette is crafted from. You can find Adidas branding on the footbed of the slide, and that is all with minimalism key for the design of the slides. If you need a versatile piece of footwear, the Yeezy Slide is the perfect option.",
		brandId: 1,
		colour: "Orange",
		releaseDate: "2021-01-01",
		categoryIds: [2],
		sneakerImages: [
			{
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-1.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-2.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-3.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-4.avif"
			}, {
				url: "https://storage.googleapis.com/thecube-product-images/YEEZY%20SLIDE%20ONYX-5.avif"
			}
		]
	}
]