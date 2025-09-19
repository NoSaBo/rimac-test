# Rimac Insurance Plans App

This is a [Next.js](https://nextjs.org) project for selecting and summarizing insurance plans, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

- `src/app/` - Main Next.js app routes and pages
- `src/cmp/` - React components (e.g., [`planSelection.tsx`](src/cmp/planSelection.tsx), `planSummary.tsx`, etc.)
- `src/context/` - React context providers
- `src/types/` - TypeScript types
- `src/utils/` - Utility functions
- `public/` - Static assets

## Features

- Browse and select insurance plans
- Apply discounts to plans
- Responsive design for mobile and desktop
- Plan summary with user details

## Environment Variables

Create a `.env` file with the following:

```
USER_API="https://rimac-front-end-challenge.netlify.app/api/user.json"
PLANS_API="https://rimac-front-end-challenge.netlify.app/api/plans.json"
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy

You can deploy this app on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
