import {FC} from 'react';
import {GetServerSideProps} from "next";
import Head from 'next/head';
import ContactInfo from "../../components/ContactInfo";
import {ContactType} from "../../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params as any;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    // const data = null;
    /**
     * для перехвата ошибок, например если data = null
     * */
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {contact: data}
    }
}

export type ContactProps = {
    contact: ContactType;
}

const Contact: FC<ContactProps> = ({contact}) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>

    );
};

export default Contact;