import Heading from "./Heading";
import {Post} from '../pages/posts'

export type PropTypes = {
    post: Post;
}

const PostInfo = ({post}: PropTypes) => {
    const {title, body} = post || {};

    if (!post) {
        return <Heading tag="h3" text="Empty post"/>
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <p>{body}</p>
        </>
    );
}

export default PostInfo;