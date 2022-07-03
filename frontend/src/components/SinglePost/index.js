import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../../store/postReducer';
import EditPost from '../EditPost';
import CommentList from '../CommentList';
import AddComment from '../AddComment';
import './SinglePost.css'


const SinglePost = ({ posts }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { postId } = useParams();
    const singlePost = posts[postId]
    const [showEditPost, setShowEditPost] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false)
    const user = useSelector(state => state.session.user);




    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
    }, [posts]);

    let content = null;

    let commentContent = null;

    if (showEditPost) {
        content = (
            <EditPost
                singlePost={singlePost}
                hideForm={() => setShowEditPost(false)}
            />
        )
    }

    if (showAddComment) {
        commentContent = (
            <AddComment
                postId={postId}
                hideForm={() => setShowAddComment(false)}
            />
        )
    }

    const deleteRedirect = async () => {
        await dispatch(deletePost(singlePost.id));
        const loaded = await dispatch(fetchPosts());
        if (loaded) {
            history.push('/')
        }
    }


    return (singlePost ?

        (!showEditPost ?
            <div className='single-post-outer'>
                <div className='single-post-container'>
                    <h1>{singlePost?.title}</h1>
                    <p>{singlePost?.body}</p>
                    <div>
                        {(!showEditPost && (singlePost?.userId === user?.id)) && (
                            <button className='single-post-btn' onClick={() => setShowEditPost(true)}>Edit</button>
                        )}
                        {(singlePost?.userId === user?.id) && (
                            <button className='single-post-btn' onClick={deleteRedirect}>Delete Post</button>
                        )}
                    </div>
                </div>
                {user ?
                    <div className='single-post-comment-container'>
                        <CommentList />
                        <button className='single-post-add-comment-btn' onClick={() => setShowAddComment(true)}>Add Comment</button>
                        {commentContent}
                    </div>
                    :
                    <div className='single-post-comment-container'>
                        <CommentList />
                    </div>

                }


            </div>


            :
            <div>
                {content}
            </div>
        )
        :
        <div>Please wait or click <Link exact to='/'>here</Link> to go home</div>
    )
}

export default SinglePost;
