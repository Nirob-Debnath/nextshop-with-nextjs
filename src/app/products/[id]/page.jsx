"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => String(item.id) === String(id));
                setProduct(found);
            });
    }, [id]);

    if (!product) {
        return <div style={{ padding: "2rem" }}>Loading...</div>;
    }

    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
            <div style={{
                background: '#f5f7fa',
                border: '1px solid #c5cae9',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(58, 90, 255, 0.07)',
                padding: '2rem',
                textAlign: 'center',
            }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "10px", background: '#e3eafc' }}
                />
                <h1 style={{ margin: "1.5rem 0 0.5rem", color: '#1a237e', fontWeight: 700 }}>{product.model}</h1>
                <p style={{ color: "#3949ab", fontWeight: 600, marginBottom: "1rem" }}>${product.price} &nbsp;|&nbsp; {product.category}</p>
                <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: '1rem' }}>{product.description}</p>
                <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: '400px', color: "black", background: '#e3eafc', borderRadius: '8px', padding: '1rem' }}>
                    <p><strong>Model:</strong> {product.model}</p>
                    <p><strong>RAM:</strong> {product.ram} ({product.ramType})</p>
                    <p><strong>SSD:</strong> {product.ssd}</p>
                    <p><strong>HDD:</strong> {product.hdd}</p>
                    <p><strong>GPU:</strong> {product.gpu}</p>
                    <p><strong>Processor:</strong> {product.processor}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;