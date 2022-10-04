export type AddressType = {
    street: string;
    suite: string;
    zipcode: string;
    city: string;
}

export type ContactType = {
    id: string;
    name: string;
    email: string;
    address: AddressType
}

export type PostType = {
    title: string;
    body: string;
    id: string;
    userId: string;
}

export type SocialsType = {
    id: number;
    icon: string;
    path: string;
}[]

export type HeadingType = {
    tag?: string;
    text: string;
}