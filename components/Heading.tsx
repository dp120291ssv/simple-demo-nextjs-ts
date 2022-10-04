import {FC} from 'react';
import {HeadingType} from "../types";

const Heading: FC<HeadingType> = ({tag, text}: any) => {
    const Tag = tag || 'h1'
    return <Tag>{text}</Tag>
};

export default Heading;