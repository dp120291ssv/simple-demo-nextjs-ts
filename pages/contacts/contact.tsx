import React from 'react';
import Heading from "../../components/Heading";
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Heading>Single Contact</Heading>
            <p>test@gmail.com</p>
        </>

    );
};

export default Contact;