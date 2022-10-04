import {FC} from 'react';
import {useEffect, useState} from "react";
import {GetStaticProps} from "next";
import Head from "next/head";
import Link from 'next/link';
import Heading from "../../components/Heading";
import {PostType} from "../../types";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
        props: {posts: data}
    }
}

export type PostsProps = {
    posts: Array<PostType>
}

const Posts: FC<PostsProps> = ({posts}) => {
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
                <title>Posts</title>
            </Head>
            <Heading text="Posts List:"/>
            {posts && posts.map(({id, title}) => (
                <li key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                </li>
            ))}
        </>
    );
};

export default Posts;