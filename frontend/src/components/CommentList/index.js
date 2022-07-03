import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments, removeComment, clearComments } from '../../store/commentReducer';

const CommentList = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state=> state.comments);
    const user = useSelector(state => state.session.user);
    const {postId} = useParams();


    useEffect(() => {

        dispatch(getComments(postId))
        return (() => dispatch(clearComments()))
    }, [dispatch, postId])

    const deleteSpecificComment = async(commentId) => {
        await dispatch(removeComment(commentId))
    }


    return (
        <div>
            <ul>
                {Object.values(comments).map(({id, body, userId, User}) => (
                    <div className='single-post-comment' key={id}>
                        <li>{body}
                        <div>
                        Comment By: {User?.username}
                        </div>
                        </li>
                        {(userId === user?.id) && (
                        <button onClick={() => deleteSpecificComment({id})}>Delete</button>
                        ) }
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CommentList;
