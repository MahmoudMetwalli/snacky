import Image from 'next/image';
import styles from './order.module.css';

export default function OrderPage() {
	const product = {
		'fruitsalad': {
			id: 1,
			name: 'fruitsalad',
			info: 'fresh and healthy',
			price: 10,
			photo: '/snackLogo.jpeg',
		},
		'pizza': {
			id: 2,
			name: 'pizza',
			info: 'fresh and healthy',
			price: 15,
			photo: '/snackLogo.jpeg',
		},
		'hamburger': {
			id: 3,
			name: 'hamburger',
			info: 'fresh and healthy',
			price: 20,
			photo: '/snackLogo.jpeg',
		},
		'hotdog': {
			id: 4,
			name: 'hotdog',
			info: 'fresh and healthy',
			price: 10,
			photo: '/snackLogo.jpeg',
		},
		'icecream': {
			id: 5,
			name: 'icecream',
			info: 'fresh and healthy',
			price: 5,
			photo: '/snackLogo.jpeg',
		},
		'pasta': {
			id: 6,
			name: 'pasta',
			info: 'fresh and healthy',
			price: 10,
			photo: '/snackLogo.jpeg',
		},
		'popcorn': {
			id: 7,
			name: 'popcorn',
			info: 'fresh and healthy',
			price: 5,
			photo: '/snackLogo.jpeg',
		},
		'sandwich': {
			id: 8,
			name: 'sandwich',
			info: 'fresh and healthy',
			price: 10,
			photo: '/snackLogo.jpeg',
		},
		'soup': {
			id: 9,
			name: 'soup',
			info: 'fresh and healthy',
			price: 10,
			photo: '/snackLogo.jpeg',
		},
		'steak': {
			id: 10,
			name: 'steak',
			info: 'fresh and healthy',
			price: 25,
			photo: '/snackLogo.jpeg',
		},
	};

	return (
		<div className={styles.container}>
			{Object.values(product).map((item, index) => (
				<div key={index} className={styles.product}>
					<>
						<>
							<div className={styles.Image}><Image src={item.photo} alt='' width={100} height={100} /></div>
						</>
						<div className={styles.info}>
							<h2>{item.name}</h2>
							<p>{item.info}</p>
							<p>${item.price}</p>
						</div>
						<button className={styles.button}>Order</button>
					</>
				</div>))}
		</div>
	)
};
