import React from 'react';
import styles from './search.module.css';
const SearchBar = ({ value, onChange }) => {
    return (
        <input
            type="text"
            className={styles.searchInput}
            placeholder="Search for products..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default SearchBar;
