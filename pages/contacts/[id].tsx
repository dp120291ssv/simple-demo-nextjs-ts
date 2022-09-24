import Head from 'next/head';
import ContactInfo from "../../components/ContactInfo";
import {Contact} from "./index";


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