import React from 'react';
import styles from './search.module.css';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className={styles.searchInputContainer} >
            <div className={styles.searchInput}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search for products..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;
