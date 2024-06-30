// src/app/connct/page.jsx
"use client";
import React from 'react';
import styles from './contact.module.css';

const Connect = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.connectSection}>
                <div className={styles.contactInfo}>
                    <h2>Contact</h2>
                    <p><strong>What do You Think</strong></p>
                    <p>Feel free to get in touch with us. We always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <p><strong>Phone</strong><br />+201027746531</p>
                    <p><strong>Email</strong><br />rameya683@gmail.com</p>
                </div>
                <div className={styles.contactForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <div className={styles.inputField}>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" />
                            </div>
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className={styles.textarea}></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Connect;
