import React from 'react';
import styles from './about.module.css'; // Adjust the import path if necessary

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.description}>
                Welcome to Snacky, your number one source for all Healthy food. We're dedicated to giving you the very best of Healthy food (sancks), with a focus on quality, freshness, and customer service.
            </p>
            <p className={styles.description}>
                Founded in 2023, Snacky has come a long way from its beginnings. When we first started out, our passion for healthy and delicious snacks drove us to do tons of research so that Snacky can offer you the world's most advanced snacking options. We now serve customers all over the country and are thrilled that we're able to turn our passion into our own website.
            </p>
            <p className={styles.description}>
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <p className={styles.signature}>
                Sincerely,<br />
                Snacky Team
            </p>
        </div>
    );
};

export default About;
