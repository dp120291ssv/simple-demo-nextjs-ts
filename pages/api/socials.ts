import type {NextApiRequest, NextApiResponse} from 'next'
import {socials} from './data/socials';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // console.log('res', res.json(socials))
        res.status(200).json(socials)
    }
}
