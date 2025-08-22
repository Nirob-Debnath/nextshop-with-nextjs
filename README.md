# NextShop

A modern e-commerce web application built with Next.js, featuring a laptop-focused product catalog, authentication, protected dashboard, and a responsive UI with Tailwind CSS.

## Features
- Laptop product catalog with detailed specs
- Product details and protected add-product dashboard
- Authentication (NextAuth)
- Responsive design with dark/light theme support
- Home page with carousel and featured sections

## Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Nirob-Debnath/nextshop-with-nextjs.git
   cd nextshop-with-nextjs
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local` and update values as needed (e.g., database, NextAuth secret).

4. **Run the development server:**
   ```sh
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Route Summary

| Route                      | Description                                      |
|---------------------------|--------------------------------------------------|
| `/`                       | Home page with carousel and featured sections    |
| `/products`               | Product listing page (laptops only)              |
| `/products/[id]`          | Product details page                             |
| `/dashboard/add-product`  | Protected page to add a new product (auth only)  |
| `/signup`                 | Signup/login page                                |

## Tech Stack
- Next.js
- React
- Tailwind CSS
- daisyUI
- NextAuth.js

---
Feel free to contribute or open issues for improvements!