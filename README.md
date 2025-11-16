🛍️ Clothing Brand E-Commerce Website
Next.js | React | Authentication | Cart System | Dynamic Product Pages

This project is a fully functional E-Commerce Clothing Store built with Next.js (App Router).
It includes Men, Women, Kids categories, Cart functionality, Login system, Protected Routes,
Checkout page, Payment selection, and Order Success flow.

The project is designed with a clean UI and modern UX, suitable for production-level setups.

📌 Table of Contents

✨ Overview

🚀 Key Features

📸 Screenshots

📁 Folder Structure

⚙️ Tech Stack

🔐 Authentication System

🛒 Cart System

💳 Checkout & Payment

🎨 UI/UX & Styling

📦 Installation & Setup

🧪 How It Works (Detailed Flow)

🚧 Future Enhancements

🤝 Contributing

📄 License

👤 Author

✨ Overview

This is a complete full-stack e-commerce project built using Next.js (App Router).
The application replicates real online shopping flow:

✔ Browse Men, Women, Kids products
✔ Add products to cart
✔ Increase/decrease/remove items
✔ Login before shopping
✔ Proceed to checkout
✔ Select payment method
✔ Place an order
✔ View success screen

The project uses React Context API for global state (cart + auth) and localStorage for persistence.

🚀 Key Features
🧑‍💼 Authentication

Login page with email validation (@gmail.com required)

User state stored in Context + localStorage

ProtectedRoute component restricts access

Unauthenticated users auto-redirect to /login

🎽 Product Category Pages

Men, Women, Kids product sections

Display product card with:

Image

Title

Price

Add to cart button

Quantity manage (+ / –)

Go to cart button

🛒 Advanced Cart System

Add multiple products

Increase / decrease quantity

Auto update subtotal

Remove product from cart

Cart persists using localStorage

Cart counter in Navbar

Fully responsive layout

💳 Checkout + Payment

Accessible only after login

Payment methods:

UPI

Card

Cash on Delivery (COD)

Validation: user must select a method

After “Place Order” → redirect to success page

🎉 Order Success Page

Shows "Thank You for Shopping"

Button back to Home

Clean UI

🎨 UI/UX Features

Sticky transparent navbar with blur effect

Background images for category pages

Dynamic text colors (white on dark backgrounds)

Product cards with shadows

Minimalistic modern e-commerce UI

📸 Screenshots

(You can add real screenshots later)

Homepage

Men/Women/Kids pages

Product Card

Cart Page

Checkout Page

Success Page

Login Page

📁 Folder Structure
root/
│── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── men/
│   │   └── page.tsx
│   ├── women/
│   │   └── page.tsx
│   ├── kids/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   └── success/
│       └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── CartContext.tsx
│   ├── AuthContext.tsx
│   └── ProtectedRoute.tsx
│
├── data/
│   └── products.ts
│
├── public/
│   └── images/
│       ├── men/
│       ├── women/
│       └── kids/
│
├── app/globals.css
└── README.md

⚙️ Tech Stack
Frontend / Full Stack

Next.js 16 (App Router)

React 18

JavaScript / TypeScript Support

CSS / Inline Styles

State Management

Context API

localStorage persistence

Routing

Next.js App Router

Client-side navigation (router.push)

🔐 Authentication System

AuthContext stores user

Login page validates email:

must end with @gmail.com


On login → store user in:

React Context

localStorage

On logout → remove user

ProtectedRoute checks auth:

If user not logged in → redirect to /login

Else → allow access

🛒 Cart System

CartContext stores:

cart items

addToCart

increaseQty

decreaseQty

removeFromCart

subtotal

All cart operations update localStorage

ProductCard:

Shows add button initially

When added → shows + / – / Go to Cart

Cart page:

Full list

Quantity controls

Remove button

Total price

Proceed to Checkout

💳 Checkout & Payment

Accessible only after login

Text displays correctly on dark backgrounds

Payment methods:

UPI

Card

Cash On Delivery

Must select one

After selecting → Place Order

Redirect to Success page

🎨 UI/UX & Styling

Sticky navbar with blur glass effect

Dark/light text auto-adjust

Product cards with depth & shadows

Consistent typography

Animated buttons

Clean spacing and layout

📦 Installation & Setup
1️⃣ Clone the repo
git clone <repo-url>

2️⃣ Navigate to project
cd project-web

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm run dev

5️⃣ Open browser
http://localhost:3000

🧪 How It Works (Detailed Flow)
1. User opens the website

Navbar shows:

Home

Login

Men/Women/Kids/Cart visible only after login.

2. User logs in

Email validated

User saved in localStorage

Redirects to home

Navbar now shows:

Men / Women / Kids

Cart

Logout button

3. User browses products

Background image per section

Product grid displayed

Click “Add to Cart”

4. User opens cart

Shows:

Product image

Product name

Price

Quantity controls

Total price

Proceed to Checkout

5. User proceeds to checkout

Payment methods appear

Must select one

After selecting → click Place Order

6. Order placed

Redirect to:

/success


Shows:

Thank You message

Go to Home button

🚧 Future Enhancements

Add a backend (Node.js / Firebase / MongoDB)

Real payment integration (Razorpay / Stripe)

Add wishlist

Add user profile page

Add order history

Admin panel for product management

Pagination & search

Add reviews & ratings

🤝 Contributing

Pull requests are welcome.
Please open an issue before making major changes.

📄 License

This project is open-source and free to use.

👤 Author
Sachin Singh

Developer | Full Stack Learner
Built with ❤️ using Next.js and react
