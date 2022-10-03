// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {socials} from './data/socials';

export type Socials = {
    id: number;
    icon: string;
    path: string;
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Socials>
) {
    console.log('res', res.json(socials))
    if (req.method === 'GET') {
        res.status(200).json(socials)
    }
}
