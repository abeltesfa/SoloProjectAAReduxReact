import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments, removeComment } from '../../store/commentReducer';

const CommentList = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state=> state.comments);
    const user = useSelector(state => state.session.user);
    const {postId} = useParams();

    useEffect(() => {
        dispatch(getComments(postId))
    }, [dispatch, postId])

    const deleteSpecificComment = async(commentId) => {
        await dispatch(removeComment(commentId))
    }

    return (
        <div>
            <ul>
                {Object.values(comments).map(({id, body, userId}) => (
                    <div key={id}>
                        <li>{body}</li>
                        {(userId == user?.id) && (
                        <button onClick={() => deleteSpecificComment({id})}>Delete</button>
                        ) }
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CommentList;
