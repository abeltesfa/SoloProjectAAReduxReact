import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { fetchPosts } from '../../store/postReducer';


const PostsList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const posts = useSelector(state=>state.posts);


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

      useEffect(() => {
    }, [posts]);
    // console.log(posts)

    return (
        <div>
            <ul>
                {Object.values(posts).map(({ id, title }) => (
                    <li key={id}><NavLink to={`/posts/${id}`}>{title}</NavLink></li>
                ))}
            </ul>
            <button onClick={() => history.push('./posts/new')}>Create Post</button>
        </div>
    )
}

export default PostsList;
