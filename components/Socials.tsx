import React from 'react';
import {Socials} from '../pages/api/socials'
import Head from "next/head";
import styles from '../styles/Socials.module.scss';

export type SocialsItemsProps = {
    socials: Socials;
}

const SocialsItems = ({socials}: SocialsItemsProps) => {
    return (
        <>
            {socials ?
                <div>
                    <Head>
                        <link rel="stylesheet"/>
                    </Head>
                    <ul className={styles.socials}>
                        {socials && socials.map(({id, icon, path}) => (
                            <li key={id}>
                                <a href={path} target="_blank" rel="noopener noreferrer">
                                    <i className={`fab fa-${icon}`} aria-hidden="true"/>
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
                : null}
        </>
    );
};

export default SocialsItems;