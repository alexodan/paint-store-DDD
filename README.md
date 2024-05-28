# RFC E-commerce for a paint store

## First part: Data fetching

I separate data fetching between server and client side.

For client side data fetching, I'm using TanstackQuery and encapsulating the API calls in hooks, although for now is just mocked data.

On the server side, I'm using plain functions for both Pages and Components, the idea is to leverage loading.tsx files feature from Next and Suspense for the server components.

## List of requirements

- Products
  - List products in different categories.
- Discounts
  - Customers can enter a fidelity program for which they receive coupon codes to be redeemed at checkout.
- Checkout
  - Customers can add products to a shopping cart and visualize a detailed view of quantities and prices.
- Customer
  - Customers can sign up so they save their names, Shipping information, and so on.
- Shipping
  - Customers can opt 3 ways of shipping:
    - Use our fleet, for which they pay an additional fee during checkout.
    - Use their own transport, which means following up to coordinate their arrival.
    - They can approximate to our store and receive their purchase themselves.
  - Delivery confirmation:
    - Using our fleet, transporter gives a QR code to the client to confirm delivery (or something idk).
    - Using their transport, the transporter scans a QR code to confirm the order is ok.
    - If they come to the store, they scan the QR code confirming order is ok.
- Order flow
  - An Order is created when user finishes Checkout of the cart or directly buying a product.
  - When the client scans a QR code, the Order record changes state to Delivered.
- Payment
  - Probably some 3rd party integration with Stripe or something.

## DDD Organization

- Tests
- Styles
- Utils/Helpers
- API
- Views (Route Pages) vs Components
- CI/CD
- Design System

Questions questions:

- Q: What would be the "Release process" for this project?
- A: I don't wanna just throw things out there but do it in an orderly manner.
  Feature-based release:
  e.g. List products available and the buy button is just a contact link.
  Next, a shopping cart. And so on.

- Q: How are iterations defined and what is the scoping of each iteration?

- Q: Where product stock updates should happen (e.g. after payment, after shipping, etc)

- Q: How are domains supposed to be structured?
- A: At the root of the project, I added a `domains` which will contain each domain and its subfolder for organizing components, utils, styles, etc.

## About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
