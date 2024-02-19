// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs';
import { revalidatePath } from 'next/cache';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      const message = 'Method not allowed';
      return res.status(405).json({ message });
    }

    const signature = req.headers[SIGNATURE_HEADER_NAME];
    const isValid = isValidSignature(JSON.stringify(req.body), signature as string, SANITY_WEBHOOK_SECRET as string);

    if (!isValid) {
      const message = 'Invalid signature';
      return res.status(401).json({ message });
    }

    const { _type, slug } = req.body;
    if (!_type || !slug?.current) {
      const message = 'Bad request';
      return res.status(400).json({ message });
    }

    const staleRoute = `/${slug.current}`;
    revalidatePath(staleRoute);
    const message = `Revalidation request for ${staleRoute} has been sent`;
    return res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export default withSentry(handler);
