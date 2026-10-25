# Mohlay Fashion Muzaffarpur — MERN starter

A premium boutique ecommerce starter with a React storefront and Express/MongoDB API.

## Brand
- Mohlay Fashion Muzaffarpur
- Madhopur Rd, Kacchi Pakki Bus Stand Road, near Surbhi Sweets, Chowk, Muzaffarpur, Bihar 842002
- +91 9162287668

## Stack
- Client: React + Vite + React Router + plain CSS
- API: Node.js + Express
- Database: MongoDB + Mongoose
- Auth: JWT, bcrypt password hashing, role-based admin middleware
- Payments: checkout adapter placeholder for Razorpay/Stripe. Do not accept live payments until credentials, webhook signature validation, and provider-side verification are configured.

## Run locally
Requirements: Node 20+, MongoDB.

### API
```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### Client
```bash
cd client
npm install
npm run dev
```
Client defaults to `http://localhost:5173`; API defaults to `http://localhost:5000`.

## Included
- Premium responsive storefront, categories, search, filters, sort, product details
- Cart, quantity updates, coupon field, checkout form
- Account registration/login API with hashed passwords and JWT
- Product, inventory, order and customer schemas
- Admin-protected product/order management API foundations
- Order status tracking endpoint foundation
- Analytics summary endpoint foundation
- Security headers, rate limiting, request validation basics, environment-based secrets

## Before production
1. Configure a real MongoDB deployment and strong secrets in environment variables.
2. Add image upload to a trusted storage provider; do not store image files in MongoDB.
3. Implement and test payment order creation + signed webhook verification with your chosen gateway.
4. Add email/SMS receipts, password reset, address book, returns/refunds, GST/invoice rules, shipping integrations, consent/cookie policy and privacy/terms pages.
5. Run dependency audits, tests, accessibility checks, backups, monitoring and penetration testing.
6. Create the first admin user securely; never expose admin registration publicly.
