// pages/api/auth/linkedin.ts
import { NextApiRequest, NextApiResponse } from 'next';

const LINKEDIN_AUTH_URL = 'https://www.linkedin.com/oauth/v2/authorization';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const scope = 'r_liteprofile r_emailaddress w_member_social'; // Scope yang dibutuhkan

  const url = `${LINKEDIN_AUTH_URL}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  res.redirect(url);
};

export default handler;
