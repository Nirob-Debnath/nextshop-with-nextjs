"use client";
import React from 'react';
import { useSession } from 'next-auth/react';


const UserInfo = () => {
    const { data: session } = useSession();

    if (!session || !session.user) {
        return <span className="text-gray-500 text-sm">Not logged in</span>;
    }

    const { name, email, image } = session.user;

    return (
        <div className="flex items-center gap-2">
            {image && (
                <img src={image} alt={name || "User"} className="w-8 h-8 rounded-full border" />
            )}
            <div className="flex flex-col">
                <span className="font-medium text-sm">{name}</span>
                <span className="text-xs text-gray-500">{email}</span>
            </div>
        </div>
    );
};

export default UserInfo;