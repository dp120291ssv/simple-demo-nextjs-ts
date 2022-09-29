import Heading from "../../components/Heading";
import Head from "next/head";
import Link from 'next/link';
import {useEffect, useState} from "react";

export const getStaticProps = async () => {
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

export type Post = {
    id: string;
    title: string;
    body: string;
    userId: string;
}

export type PostsProps = {
    posts: Array<Post>
}

const Posts = ({posts}: PostsProps) => {
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