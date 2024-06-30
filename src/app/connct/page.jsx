"use client";
import React, { useRef } from 'react';
import styles from './connect.module.css';



const Connect = () => {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.container}>
            <button onClick={scrollToSection} className={styles.scrollButton}>
                Go to Connect Section
            </button>

            <div className={styles.spacer}></div>

            <div ref={sectionRef} className={styles.connectSection}>
                <h2>Connect with Us</h2>
                <p>Feel free to reach out to us through any of the following ways:</p>
                <ul>
                    <li>Email: contact@ourcompany.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Address: 1234 Street Name, City, State, Zip</li>
                </ul>
            </div>
        </div>
    );
};

export default Connect;
