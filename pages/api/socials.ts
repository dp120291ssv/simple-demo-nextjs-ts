// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {socials} from './data/socials';
import {SocialsType} from "../../types";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<SocialsType>
) {
    if (req.method === 'GET') {
        res.status(200).json(socials)
        console.log('res', res.json(socials))
    }
}
