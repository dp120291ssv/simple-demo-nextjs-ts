import React from "react";
import Heading from "../../components/Heading";
import Head from "next/head";

const Contacts = () => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts List:" />
            <p>test@gmail.com</p>
            <p>test@gmail.com</p>
            <p>test@gmail.com</p>
            <p>test@gmail.com</p>
        </>
    );
};

export default Contacts;