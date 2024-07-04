import React from 'react';
import styles from './breakfast.module.css';
import Link from 'next/link';

const BreakfastSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Breakfast<br />To-Go</h1>
                <p>No time to linger? That's fine. We've packed you a breakfast fit for kings. Emphasis on "fit."<br />
                    Check out the ingredients:</p>
                <ul>
                    <li>Slow-roasted oats & grains</li>
                    <li>Vine-ripened grapes & berries</li>
                    <li>Naturally sweetened dried fruit</li>
                    <li>Homemade yogurt</li>
                    <li>Freshly harvested honey</li>
                </ul>
                <Link href="/order">
                    <button className={styles.orderButton}>ORDER NOW !!!</button>
                </Link>
            </div>
            <div className={styles.imageContainer}>
                <img src="/breakfast3.png" alt="Breakfast jars" />
            </div>
        </div>
    );
};

export default BreakfastSection;
