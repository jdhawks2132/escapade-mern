const mongoose = require('mongoose');
const Adventure = require('../models/Adventure');

mongoose
	.connect('mongodb://127.0.0.1:27017/escapade', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to db');
	})
	.catch((err) => {
		console.log(err);
	});

const adventureSeeds = [
	{
		country: 'Brazil',
		location: 'Rio De Janeiro',
		image: '/images/Brazil/DSC08189.jpg',
		activity: 'Helicopter Ride',
		description:
			'There are many companies in Rio offering helicopter tours around the city, so there are many options and competitive prices to choose from.  Most of these tours offer pick up and drop off to your hotel, which is nice since the helipad is a good ride away from the city center.  The tours charge around $200 per person and last around 30 minutes, with the price per person going down as more people join the tour.  You will fly over Ipanema Beach, Copacabana Beach, Christ the Redeemer, Sugarloaf Mountain, the Maracanã Stadium, and more.',
	},
	{
		country: 'Brazil',
		location: 'Rio De Janeiro',
		image: '/images/Brazil/DSC08372 (1).jpg',
		activity: 'City Tour',
		description:
			'There are also vast options when it comes to city tours.  There are far too many sigths to see and things to do in the city, so there are also many different types of tours with many different prices ranging from $25 to $160.  Take a city tour and see the main attractions of the city, go watch a game in the world famous Maracanã Stadium, take a hiking tour to Pedra De Gavea, or visit the Botanical Garden.',
	},
	{
		country: 'Brazil',
		location: 'Rio De Janeiro',
		image: '/images/Brazil/DSC08441.jpg',
		activity: 'Pão De Açucar (Sugarloaf Mountain)',
		description:
			'Sugarloaf Mountain is a peak which sits at the mouth of the Guanabara Bay in Rio De Janeiro.  At the peak of 396m, you get a spectacular view of the entire city.  To reach the top, you will need to take a cable car from Praia Vermelha (Red Beach) which will cost you $21.98.  It is good to note that the harbor of Rio De Janeiro is one of the 7 natural wonders of the world!',
	},
	{
		country: 'Brazil',
		location: 'Foz do Iguaçu',
		image: '/images/Brazil/DSC08669.jpg',
		activity: 'Iguazu Falls',
		description:
			'Iguazu falls are known to be the largest system of waterfalls in the world; made up of 275 different drops, and with a width of 2,700 meters in diameter (3,000 feet wider than Victoria Falls.  Here you will visit the Brazilian side of the falls since it sits on the border.  From the Brazilian side, you will get a better wide view of the falls, since 80% of the falls sit on the Argentinian side.  The Brazilian side of the falls offers the better hotel and lodging options, and you can even go on a helicopter tour to get an aerial view of the massive falls.  The entrance fee to the park will cost you $18 and the park is open from 9:00 a.m. to 6:00 p.m.',
	},
	{
		country: 'Argentina',
		location: 'Misiones',
		image: '/images/Argentina/DSC08891.jpg',
		activity: 'Cataratas de Iguazu',
		description:
			'The Argentinian side of the Iguazu falls contains 80% of the water falls, so definitley take a whole day to be able to walk around and see the whole park.  Emtrance fees here are $15 and the park is open from 8:00 a.m. to 6:00 p.m.  On the Argentinian side you can also go on a boat tour to get up close and personal with the falls.',
	},
	{
		country: 'Argentina',
		location: 'Los Glaciares National Park',
		image: '/images/Argentina/AdobeStock_195792066.jpeg',
		activity: 'Perito Moreno Glacier',
		description:
			"Perito Moreno is quite a sight to see, as it is one of Argetina's most important tourist attractions.  The whole glacier has an area of 96.53 square miles; in other words, you could fit all of Washington D.C. and Manhattan inside of it and still have 5 square miles to play with.  The Glacier also has an impressive height of 256 feet, with glacial towers constantly breaking off and falling into Lago Argentino.  Perito Moreno is interesting because, unlike other glaciers around the world that are receeding, Perito Moreno is advancing still, moving forward around 2 meters (6.5 feet) every day.  Entrance to the park will cost you a whopping $7, and a round trip by bus from El Calafate will cost you $15",
	},
	{
		country: 'Argentina',
		location: 'Ushuaia',
		image: '/images/Argentina/AdobeStock_189484797.jpeg',
		activity: 'Tierra Del Fuego',
		description:
			'Also known as The End Of The World, Ushiaia is the southernmost point in the world before antartica.  Ushuaia is the gateway to Antartica cruises and tours to nearby Isla Yécapasela, also known as Penguin Island for its penguin colonies.',
	},
	{
		country: 'Peru',
		location: 'Cuzco',
		image: '/images/Peru/DSC07314.jpg',
		activity: 'Walking Tour',
		description:
			'Cuzco is a must see city.  It was once the capital of the Inca Empire which stretched the majority of South America.  The Inca Empire was connected by a system of roads that stretched for almost 25,000 miles, about three times the diameter of the earth, and Cuzco was at the center of it all.  If you are thinking of reaching Machu Picchu, you must first pass through Cuzco.  Take your time to visit the historic Plaza De Armas, the Cusco Cathedral, and the facinatng Inca stonework, especially the 12 angle stone.  You can also take a day tour to visit the famous Rainbow Mountain.',
	},
	{
		country: 'Peru',
		location: 'Machu Picchu',
		image: '/images/Peru/DSC07564.jpg',
		activity: 'Tour of Machu Picchu',
		description:
			'There are several ways to reach Machu Picchu from Cuzco, either by a 1.5 hour train ride from Ollantaytambo Station to Aguas Calientes, by walking along the train tracks if you do not want to pay for the train ride, or by going on a 3-5 day trek from Cuzco which will take you through spectacular landscapes including the famous Laguna Humantay (Humantay Lake), which sits at the bottom of the Humantay Mountain.  All of the hotels, shops, restaurants, and ticket stations for Machu Picchu are at Aguas Calientes, which is a small town near Machu Picchu.  There are several ticket options for Machu Picchu, which will fall around $50.  The tickets are also in high demand, so if you plan on going up in the morning and going up Huayna Picchu (The famous peak in the background) it will behoove you to get your tickets months ahead.',
	},
	{
		country: 'Bolivia',
		location: 'Oruro',
		image: '/images/Bolivia/_DSC4047-1.jpg',
		activity: 'Sajama Volcano',
		description:
			'This extinct Volcano is located in the Sajama National Park near the southern border.  This is the highest peak in Bolivia at an elevation of 21,463 feet.  Sajama may be an extinct stratovolcano, but there are many hot springs that surround it.  You can comfortably camp out around Sajama, although the 15,666 elevetation might be a bit uncomfortable if you are not used to high altitudes.  The mix of high alttiude and dry air makes this a perfect location for star gazing, so dip into one of the many hot springs and lay back and enjoy the stellar show of the Milky Way and Andromea Galaxy, shooting stars, and nebulas.',
	},
	{
		country: 'Bolivia',
		location: 'La Paz',
		image: '/images/Bolivia/AdobeStock_293187414.jpeg',
		activity: 'Mountain Climbing',
		description:
			"There are many mountains you can climb around La Paz, and they are all in close vicinity of the city, so you don't have to travel far to reach them.  The mountain range near La Paz is the Cordillera Real, which divides the lowlands of the Amanazon Basin from the high plateus of the Altiplano (high flat lands).  This mountain range, of which is a child of the Andes, has over 120 notable peaks, with the highest being the famous Illimani Mountain which overlooks La Paz City.",
	},
	{
		country: 'Bolivia',
		location: 'La Paz',
		image: '/images/Bolivia/DSC04938.jpg',
		activity: 'Huayna Potosi',
		description:
			'Huayna Potosi is the closest mountain to La Paz, being only 15 miles north of La Paz City, which makes it the most popular climb in Bolivia.  The climb to the 6088 m. (19,974 ft.) peak lasts 3 days, with the first being for reaching base camp, the second being the summit, and the third coming back down from base camp.  Huayna Potosi is seen as one of the easiest 6000 meter climbs, but that does not mean that it is easy by any means.  The correct equipment will be needed for the ice walls, the steep and icy surfaces, and crevases.  A climb to the peak should cost around $150.  The best time to climb this mountain is during winter, between April and November, for there is less rain/snow.',
	},
	{
		country: 'Bolivia',
		location: 'La Paz',
		image: '/images/Bolivia/DSC06103.jpg',
		activity: 'Valle De Las Animas (Valley Of The Souls)',
		description:
			'This valley is filled with massive rock towers shooting out into the sky.  This place is callled valley of the souls for it was believed that the spires resembeled petrified souls, although now it is believed to have been created by ancient glaciers and acid rain, the real reason is still unknown.  This valley is extremeley close to the city, it can be reached within munites from downtown La Paz by the Sopochachi neighborhood.',
	},
	{
		country: 'Bolivia',
		location: 'Santa Cruz',
		image: '/images/Bolivia/DSC07148-1.jpg',
		activity: 'Sand Dunes',
		description:
			'Santa Cruz is the commercial center of Bolivia, in the tropical lowlands east of the Andes Mountains.  The weather is extremely hot here, humid, and very tropical for its close proximity to the amazon.  One of the many places one can visit in Santa Cruz are the sand dunes in the Lomas De Arena Regional Park.  They small in size, but beautiful nevertheles.  In the summer as rain tends to fall, pools for in between the sand dunes.',
	},
	{
		country: 'Bolivia',
		location: 'Uyuni',
		image: '/images/Bolivia/DSC01278-1.jpg',
		activity: 'Salar De Uyuni (Salt Flats)',
		description:
			"Uyuni is the wold's largest salt flat.  It's the legacy of a prehistoric lake that went dry, leaving behind a desertlike. nearly 11,000 sq.-km. landscape of bright white salt, rock formations and cacti-studded islands.  It will take one about 4 days to see everything Uyuni has to offer, which includes colored lakes full of flamingos, hot springs, and a cactus island.  Uyuni is also the flatest place on earth.  At sunset, you are able to see your shadow stretch for miles.  To give an idea of how large Uyuni is, you could fit 155 washington D.C.s inside of Uyuni.  You have many lodging options, including 5 star hotels that are completely made of salt.  Yes I mean it, even your bed will be made of salt , the walls, the floor, the sculptures, etc.  The best time to visit is between January and March, for it is wet season.  during wet season, rain falls on Uyuni, which then leaves about 2 inches of standing water on top of the salt, turning Uyuni into the largest mirror on earth, so be sure to bring your rain boots and lots of sunscreen for not only the sun burns you but so does the reflection of the sun on the salt.",
	},
	{
		country: 'Bolivia',
		location: 'Tarija',
		image: '/images/Bolivia/DSC01151-1.jpg',
		activity: 'High Altitude Vineyards',
		description:
			'Bolivia is the only country in the world that exclusively makes high altitude wine.  Wine country in Bolivia is in Tarija, a city in the south of Bolivia.  These vineyards sit at an elevation of 6000 feet, which is an interesting elevation to make wine.  if you are looking to try high altitude wines, Tarija is your spot!',
	},
	{
		country: 'Colombia',
		location: 'Bogota',
		image: '/images/Colombia/DSC04231.jpg',
		activity: 'Monserrate',
		description:
			'Monserrate is a 3,152 meter peak that overlooks the capital of Colombia, Bogota.  A church sits at the very top of the peak, along with a restaurant that allows you to eat while overlooking the city.  There are two ways to go up, either by hiking up 2,000 meters, or by taking a cable car that will cost you around $3.  I fully recommend taking the cable car up to the top, and hiking down.  ',
	},
	{
		country: 'Colombia',
		location: 'Bogota',
		image: '/images/Colombia/DSC05056.jpg',
		activity: 'Botero Museum',
		description:
			"The Botero Museum houses one of Latin America's most important international art collections.  In the year 2000, the Colombian artist Fernando Botero donated 208 art pieces, 123 of his own making and 85 of other international artists, to the Bank of the Republic.  The museum is located in the neighborhood of La Candeleria, the historic center of Bogotá.  The museum is free of admission.  Fernando Botero is arguably the most famous Colombian artist, and one of the most famous artists of Latin America.  His signature style, known as Boterismo, evokes images of voluptous, voluminous people and objects.",
	},
	{
		country: 'Colombia',
		location: 'Quindío',
		image: '/images/Colombia/AdobeStock_168513024.jpeg',
		activity: 'Cocora Valley',
		description:
			"Cocora Valley is famous for having the world's tallest palm trees.  These wax palm trees grow up to 60 meters (200 feet) tall.  These palm trees grow at 2500 meters above sea level on steep grassy hills all over the valley, which makes it quite a sight.  The entrance fee to the valley is about $2.",
	},
	{
		country: 'Chile',
		location: 'Iquique',
		image: '/images/Chile/DJI_0181.jpg',
		activity: 'Explore The City',
		description:
			"Iquique is a coastal city in northern Chile, to the west of the Atacama Desert. A prosperous saltpeter mining town in the 19th century, today it's a popular holiday destination with a tax-free port area, Pacific beaches and a seafront casino. In its historic district, an iconic 19th-century clock tower stands in Arturo Prat Square, the city's main plaza.  Here you can go to the beach year round, you can eat amazing food, and you can also paraglide down from the mountain to the beach.",
	},
	{
		country: 'Chile',
		location: 'Patagonia',
		image: '/images/Chile/AdobeStock_349197361.jpeg',
		activity: 'Fitz Roy',
		description:
			"Monte Fitz Roy is a mountain in Patagonia, on the border. It is located in the Southern Patagonian Ice Field, near El Chaltén village and Viedma Lake.  The peak sits at 11,171 feet, and its first ascent was in 1952.  Fitz Roy's original name is Chaltén, which means 'Smoking Mountain'.  This is due to a rare aeolic phenomenon that makes its top always appear as it was surrounded by clouds, which gives the mountain a smoking volcano look.",
	},
	{
		country: 'Chile',
		location: 'Patagonia',
		image: '/images/Chile/AdobeStock_277543031.jpeg',
		activity: 'Torres Del Paine',
		description:
			"Torres del Paine National Park, in Chile’s Patagonia region, is known for its soaring mountains, bright blue icebergs that cleave from glaciers and golden pampas (grasslands) that shelter rare wildlife such as llama-like guanacos. Some of its most iconic sites are the 3 granite towers from which the park takes its name and the horn-shaped peaks called Cuernos del Paine.  Torres Del Paine has an area of 700 sq.-mi.  The in person tickets are $34, but there are also many hiking and treking tour options.  Torres Del Paine is one of the most magical places on earth, and should be seen by everyone who can.  The W Trek is Torres del Paine's most famous hiking route, with views of the granite towers that give the park its name. In full, it's a four or five day hike that can be walked without carrying gear or food, between refugios or campsites.",
	},
];

const seedDB = async () => {
	await Adventure.deleteMany({});
	await Adventure.insertMany(adventureSeeds);
	console.log('DB Seeded');
};

seedDB().then(() => {
	mongoose.connection.close();
});
