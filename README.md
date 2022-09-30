This is the website for the Molly & Ed Shill Cares Foundation.

It was created with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

This project is deployed to [Vercel](https://github.com/awbranch/shillcares).

Commiting to this git repo will cause it to redeploy to Vercel automatically.

## TODOs

x - Send the foundation an html formatted email
x - Send the applicant an html formatted email
x - Can logos be included in the html
x - Log the application to the console, so it can be found if lost
x - Display a progress message to the user while submitting
x - Display a success message to the user
- Display an error message to the user - Can they get back into the form without loosing all their work? May need to not remove the form from the dom when submitting but just hide it?
- Check what happens if after the form is completed they go back again, is it cleared?
- What happens if they hit the back button while the form is submitting?
- Read more about Formik there might be some more lifecycle methods you can pick up on instead of managing the submit processing state yourself.
