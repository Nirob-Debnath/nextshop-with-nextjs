"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch('/products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleView = (id) => {
        router.push(`/products/${id}`);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Products</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '2rem',
                }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            padding: '1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            textAlign: 'center',
                            background: '#fff',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '290px',
                        }}
                    >
                        <div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', background: '#e3eafc' }}
                                />
                                <h3 style={{ margin: '1rem 0 0.5rem', color: '#1a237e', fontWeight: 600 }}>{product.model}</h3>
                        </div>
                        <button
                            style={{
                                margin: '0 auto',
                                marginTop: '1rem',
                                padding: '0.5rem 1.5rem',
                                    background: '#3949ab',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                position: 'absolute',
                                left: '50%',
                                bottom: '16px',
                                transform: 'translateX(-50%)',
                                width: '80%'
                            }}
                            onClick={() => handleView(product.id)}
                        >
                            View
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;