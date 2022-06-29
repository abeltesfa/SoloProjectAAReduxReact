import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments } from '../../store/commentReducer';

const CommentList = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state=> state.comments)
    const {postId} = useParams();

    useEffect(() => {
        dispatch(getComments(postId))
    }, [dispatch, postId])

    return (
        <div>
            <ul>
                {Object.values(comments).map(({id, body}) => (
                    <div key={id}>
                        <li>{body}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CommentList;
