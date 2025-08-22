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
        <div className="py-8 px-4">
            <h1 className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative border border-[#c5cae9] dark:border-gray-800 rounded-xl p-4 shadow-lg text-center bg-[#f5f7fa] dark:bg-[#23243a] flex flex-col justify-between h-64 transition duration-200 hover:shadow-xl"
                    >
                        <div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-34 object-cover rounded-lg bg-[#e3eafc] dark:bg-[#2c2e4a] mb-2"
                            />
                            <h3 className="mt-4 mb-2 text-indigo-900 dark:text-indigo-300 font-semibold text-base">{product.model}</h3>
                        </div>
                        <button
                            className="w-4/5 mx-auto mt-2 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-base transition absolute left-1/2 bottom-4 -translate-x-1/2"
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