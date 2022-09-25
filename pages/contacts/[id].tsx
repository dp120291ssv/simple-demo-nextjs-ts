import Head from 'next/head';
import ContactInfo from "../../components/ContactInfo";
import {Contact} from "./index";

export const getServerSideProps = async(context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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
        props: {contact: data}
    }
}

export type ContactProps = {
    contact: Contact;
}

const Contact = ({contact}: ContactProps) => {
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