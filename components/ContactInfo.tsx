import Heading from "./Heading";
import {Contact} from "../pages/contacts";

export type ContactProps = {
    contact: Contact;
}

const ContactInfo = ({contact}: ContactProps) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}

    if(!contact){
        return <Heading tag="h3" text="Empty contact. Ups.." />
    }

    return (
        <>
            <Heading tag="h3" text={name} />
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`${street} ${suite} ${city} ${zipcode}`}
            </div>
        </>
    );
};

export default ContactInfo;