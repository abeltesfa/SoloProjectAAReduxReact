import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/postReducer';
import EditPost from '../EditPost';


const SinglePost = ( { posts }) => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const singlePost = posts[postId]
    const [showEditPost, setShowEditPost] = useState(false);
    const [editPostId, setEditPostId] = useState(null);

    // const post = useSelector(state => state.posts.postId)

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

      useEffect(() => {
    }, [posts]);
    let content=null;

    if(showEditPost) {
        content = (
            <EditPost
            singlePost={singlePost}
            hideForm={() => setShowEditPost(false)}
            />
        )
    }

    return (
        <div>
            <h1>{singlePost?.title}</h1>
            <p>{singlePost?.body}</p>
            <div>
                {!showEditPost && (
                    <button onClick={() => setShowEditPost(true)}>Edit</button>
                )}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default SinglePost;
