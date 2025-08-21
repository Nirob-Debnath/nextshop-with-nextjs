"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React from "react";

const Navbar = () => {
    const { data: session } = useSession();

    const links = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            {session && <li><Link href="/dashboard/add-product">Add Product</Link></li>}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">NextShop</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end">
                {session ? (
                    <button
                        onClick={() => signOut()}
                        className="btn bg-red-500 text-white hover:bg-red-600"
                    >
                        Logout
                    </button>
                ) : (
                    <Link href="/login" className="btn bg-blue-500 text-white hover:bg-blue-600">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;