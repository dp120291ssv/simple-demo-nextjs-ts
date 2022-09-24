import Heading from "../../components/Heading";
import Head from "next/head";
import Link from 'next/link';
import {useEffect, useState} from "react";

export const getStaticProps = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    // const data = null;

    /**
     * для перехвата ошибок, например если data = null
     * */
    if(!data){
        return {
            notFound: true,
        }
    }

    return {
        props: {contacts: data}
    }
}

export type ContactAddress = {
    street: string;
    suite: string;
    zipcode: string;
    city: string;
}

export type Contact = {
    id: string;
    name: string;
    email: string;
    address: ContactAddress
}

export type ContactsProps = {
    contacts: Array<Contact>
}

const Contacts = ({contacts}: ContactsProps) => {
    /**
     * альтрернатива для getStaticProps, только getStaticProps делает ssr
     * */
    // const [contacts, setContacts] = useState(null)
    //
    // useEffect(() => {
    //     const fetchData = async() => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await response.json();
    //         setContacts(data);
    //     }
    //     fetchData();
    // }, [])

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts List:" />
            {contacts && contacts.map(({id, name}) => (
                <li key={id}>
                   <Link href={`/contacts/${id}`}><strong>{name}</strong></Link>
                </li>
            ))}
        </>
    );
};

export default Contacts;