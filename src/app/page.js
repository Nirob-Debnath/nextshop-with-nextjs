import React from "react";

export default async function Home() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome to NextShop!</h1>
            <p className="py-6">
              Discover the best products and deals at NextShop. Shop now and enjoy
              exclusive offers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}