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
        <div className="py-8 px-4 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg overflow-hidden">
                {/* Left section: image and product name centered */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-8">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-xs h-72 object-cover rounded-xl bg-blue-100 dark:bg-gray-800 mb-6"
                    />
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">{product.name}</h1>
                </div>
                {/* Right section: details and price at middle bottom */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center relative">
                    <span className="block text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-2">{product.category}</span>
                    <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{product.model}</span>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
                    <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 mb-16">
                        <p className="mb-2"><span className="font-semibold">Model:</span> {product.model}</p>
                        <p className="mb-2"><span className="font-semibold">RAM:</span> {product.ram} ({product.ramType})</p>
                        <p className="mb-2"><span className="font-semibold">SSD:</span> {product.ssd}</p>
                        <p className="mb-2"><span className="font-semibold">HDD:</span> {product.hdd}</p>
                        <p className="mb-2"><span className="font-semibold">GPU:</span> {product.gpu}</p>
                        <p className="mb-2"><span className="font-semibold">Processor:</span> {product.processor}</p>
                    </div>
                    {/* Price at middle bottom */}
                    <div className="absolute left-1/2 bottom-8 -translate-x-1/2">
                        <span className="block text-xl font-bold text-green-700 dark:text-green-400">Price: ${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;