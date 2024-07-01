"use client";
import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import SearchBar from '@/components/search/search';
import styles from './order.module.css';
import { useContext } from 'react';
import CartContext from '@/context/cartContext';

export default function OrderPage() {
    const { addItemToCart, cart } = useContext(CartContext);
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
	const addItemToCartHandler = (item) => {
		addItemToCart({
			id: item.id,
			name: item.name,
			info: item.info,
			price: item.price,
			photo: item.photo,
	});
	}

	// Search bar
	const [searchTerm, setSearchTerm] = useState('');
	// Filter products based on search term
	const filteredProducts = Object.values(product).filter((product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	return (
		<>
			<div>
				<SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
			</div>
			<div className={styles.container}>
				{filteredProducts.map((item, index) => (
					<div key={index} className={styles.product}>
						<div className={styles.Image}>
							<Image src={item.photo} alt={item.name} width={200} height={200} />
						</div>
						<div className={styles.info}>
							<h2 className={styles.name}>{item.name}</h2>
							<p className={styles.text}>{item.info}</p>
							<p>Price: {item.price} L.E.</p>
						</div>
						<button className={styles.button} onClick={() => addItemToCartHandler(item)}>Add to cart</button>
					</div>
				))}
			</div>
		</>
	);
}
