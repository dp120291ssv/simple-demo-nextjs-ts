import Head from 'next/head';
import PostInfo from "../../components/PostInfo";
import {Post} from './index'

export const getStaticPaths = async() => {
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

export const getStaticProps = async(context: { params: { id: any; }; }) => {
    const {id} = context.params
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
    post: Post;
}

const Post = ({post}: PostProps) => {
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