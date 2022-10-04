import {FC} from 'react';
import {GetStaticPaths} from "next";
import {GetStaticProps} from "next";
import Head from 'next/head';
import PostInfo from "../../components/PostInfo";
import {PostType} from "../../types";

export const getStaticPaths: GetStaticPaths = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();

    const paths = data.map(({id}: any) => ({
        params: {id: id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async(context) => {
    const {id} = context.params as any;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
        props: {post: data}
    }
}

export type PostProps = {
    post: PostType;
}

const Post: FC<PostProps> = ({post}) => {
    return (
        <>
            <Head>
                <title>Post page:</title>
            </Head>
            <PostInfo post={post}/>
        </>

    );
};

export default Post;