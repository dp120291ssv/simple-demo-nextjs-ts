
export type addressType = {
    street: string;
    suite: string;
    zipcode: string;
    city: string;
}

export type contactType = {
    id: string;
    name: string;
    email: string;
    address: addressType
}