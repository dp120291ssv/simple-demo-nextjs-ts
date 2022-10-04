import {FC} from 'react';
import {GetStaticProps} from 'next';
import Head from "next/head";
import Link from 'next/link';
import Heading from "../../components/Heading";
import {ContactType} from "../../types";

export const getStaticProps: GetStaticProps = async() => {
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

export type ContactsProps = {
    contacts: Array<ContactType>
}

const Contacts: FC<ContactsProps> = ({contacts}) => {
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
                   <Link href={`/contacts/${id}`}>{name}</Link>
                </li>
            ))}
        </>
    );
};

export default Contacts;