"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const initialState = {
    model: "",
    name: "",
    category: "Laptop",
    price: "",
    image: "",
    description: "",
    ram: "",
    ramType: "",
    ssd: "",
    hdd: "",
    gpu: "",
    processor: ""
};

export default function AddProductPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [form, setForm] = useState(initialState);
    const [error, setError] = useState("");

    if (status === "loading") return <div>Loading...</div>;
    if (!session) {
        router.replace("/signup");
        return null;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        // Replace with your API endpoint for adding products
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            if (!res.ok) throw new Error("Failed to add product");
            router.push("/products");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="max-w-xl mx-auto my-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">Add New Laptop</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="model" value={form.model} onChange={handleChange} placeholder="Model" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="price" value={form.price} onChange={handleChange} placeholder="Price ($)" type="number" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="ram" value={form.ram} onChange={handleChange} placeholder="RAM (e.g. 16GB)" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="ramType" value={form.ramType} onChange={handleChange} placeholder="RAM Type (e.g. DDR4)" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="ssd" value={form.ssd} onChange={handleChange} placeholder="SSD (e.g. 512GB)" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="hdd" value={form.hdd} onChange={handleChange} placeholder="HDD (e.g. None)" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="gpu" value={form.gpu} onChange={handleChange} placeholder="GPU (e.g. NVIDIA RTX 4060)" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <input name="processor" value={form.processor} onChange={handleChange} placeholder="Processor (e.g. Intel Core i7-13700H)" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-lg transition">Add Product</button>
            </form>
        </div>
    );
}
