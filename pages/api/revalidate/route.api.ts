// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs';
import { parseBody } from 'next-sanity/src/webhook';
import { revalidatePath } from 'next/cache';

type WebhookPayload = {
  _type: string;
  slug?: {
    current?: string;
  };
};

async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      const message = 'Method not allowed';
      return res.status(405).json({ message });
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
        req,
        process.env.SANITY_WEBHOOK_SECRET,
    );

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return res.status(401).json({ message });
    }

    if (!body?._type || !body?.slug?.current) {
      const message = 'Bad request';
      return res.status(400).json({ message });
    }

    const staleRoute = `/${body.slug.current}`;
    revalidatePath(staleRoute);
    const message = `Revalidation request for ${staleRoute} has been sent`;
    return res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export default withSentry(handler);
