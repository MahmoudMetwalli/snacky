'use client';

import React, { useEffect, useState } from 'react';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/create-users-table');
                const data = await res.json();
                setProducts(data.products || []);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error or set default products statessss
                setProducts([]);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.info}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.photo} alt={product.name} width={200} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
