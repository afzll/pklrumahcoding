// pages/api/auth/callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const LINKEDIN_TOKEN_URL = 'https://www.linkedin.com/oauth/v2/accessToken';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;

  try {
    const response = await axios.post(LINKEDIN_TOKEN_URL, null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      },
    });

    const accessToken = response.data.access_token;
    // Simpan access token di session, database, atau lakukan sesuai kebutuhan
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve access token' });
  }
};

export default handler;
