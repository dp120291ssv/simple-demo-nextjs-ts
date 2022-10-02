import React from 'react';
import {Socials} from '../pages/api/socials'

export type SocialsItemsProps = {
    socials: Socials;
}

const SocialsItems = ({socials}: SocialsItemsProps) => {
    return (
        <div>
            {socials && socials.map(model => model.id)}
        </div>
    );
};

export default SocialsItems;