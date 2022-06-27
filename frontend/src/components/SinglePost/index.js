import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/postReducer';


const SinglePost = ( { posts }) => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const singlePost = posts[postId]

    // const post = useSelector(state => state.posts.postId)

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

      useEffect(() => {
    }, [posts]);

    return (
        <div>
            <h1>{singlePost?.title}</h1>
            <p>{singlePost?.body}</p>
        </div>
    )
}

export default SinglePost;
