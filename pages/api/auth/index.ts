import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const authAPI: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'POST') {
    return res.status(405).send('method not allowed');
  }

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  return res.status(200).send({
    status: 'authenticated',
  });
};

export default authAPI;
