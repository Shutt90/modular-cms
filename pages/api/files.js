// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nextConnect from 'next-connect';

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Process a POST request
apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;
