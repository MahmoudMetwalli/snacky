import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const product = {
	'Tropical Sunrise Fruit Medley': {
		id: 1,
		name: 'Tropical Sunrise Fruit Medley',
		info: 'This vibrant fruit salad combines juicy pineapple, sweet mango, and tangy oranges, all bathed in a refreshing citrus syrup. The tropical flavors will transport you to a sunny beach paradise. Serve it at your next gathering, and watch your guests’ taste buds dance with delight',
		price: 60,
		photo: '/TropicalSunriseFruitMedley.jpeg',
	},
	'Grilled Chicken Wrap': {
		id: 2,
		name: 'Grilled Chicken Wrap',
		info: 'Whole-grain wrap filled with grilled chicken, mixed greens, cucumber, and a zesty yogurt-based sauce. Perfect for a quick, protein-rich meal on the go.',
		price: 110,
		photo: '/GrilledChickenWrap.jpeg',
	},
	'Salmon Caesar Salad': {
		id: 3,
		name: 'Salmon Caesar Salad',
		info: 'Grilled salmon fillet on a bed of romaine lettuce, with whole-grain croutons, Parmesan cheese, and a tangy Caesar dressing. Omega-3 goodness! and healthy',
		price: 200,
		photo: '/SalmonCaesarSalad.jpeg',
	},
	'Sweet Potato Tacos': {
		id: 4,
		name: 'Sweet Potato Tacos',
		info: 'Soft corn tortillas filled with roasted sweet potatoes, black beans, avocado slices, and a squeeze of lime. Flavorful and fiber-rich.',
		price: 90,
		photo: '/SweetPotatoTacos.jpeg',
	},
	'Greek Yogurt Parfait': {
		id: 5,
		name: 'Greek Yogurt Parfait',
		info: 'Layers of Greek yogurt, fresh berries, granola, and a drizzle of honey. A wholesome dessert or breakfast option.',
		price: 70,
		photo: '/GreekYogurtParfait.jpeg',
	},
	'Avocado Toast': {
		id: 6,
		name: 'Avocado Toast',
		info: 'Whole-grain bread topped with smashed avocado, cherry tomatoes, and a sprinkle of chili flakes. Simple, satisfying, and rich in healthy fats.',
		price: 100,
		photo: '/AvocadoToast.jpeg',
	},
	'Veggie Power Bowl': {
		id: 7,
		name: 'Veggie Power Bowl',
		info: 'A hearty mix of quinoa, roasted sweet potatoes, avocado, kale, and chickpeas, drizzled with lemon-tahini dressing. Nutrient-packed and delicious!',
		price: 90,
		photo: '/VeggiePowerBowl.jpeg',
	},
	'Mediterranean Quinoa Bowl': {
		id: 8,
		name: 'Mediterranean Quinoa Bowl',
		info: 'Quinoa, cherry tomatoes, cucumber, olives, and feta cheese, drizzled with olive oil and lemon juice. Bursting with Mediterranean flavors',
		price: 100,
		photo: '/MediterraneanQuinoaBowl.jpeg',
	},
};

export async function GET(request) {
	try {
		// Create table if it doesn't exist
		await sql`
      CREATE TABLE IF NOT EXISTS my_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(65),
        info VARCHAR(1000),
        price FLOAT,
        photo VARCHAR(255)
      );
    `;

		// Insert data into the table
		for (const key in product) {
			if (product.hasOwnProperty(key)) {
				const item = product[key];
				await sql`
          INSERT INTO my_table (id, name, info, price, photo)
          VALUES (${item.id}, ${item.name}, ${item.info}, ${item.price}, ${item.photo});
        `;
			}
		}

		return NextResponse.json({ message: 'Table created and data inserted successfully' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
