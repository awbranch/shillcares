This is the website for the Molly & Ed Shill Cares Foundation.

It was created with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contentful

The Contentful types in `src/types/contentful.d.ts` are generated by running the following.

```bash
npm run codegen
```

It gets the contentful environment variables from .env file


## Deploy

This project is deployed to [Vercel](https://github.com/awbranch/shillcares).

Commiting to this git repo will cause it to redeploy to Vercel automatically.

