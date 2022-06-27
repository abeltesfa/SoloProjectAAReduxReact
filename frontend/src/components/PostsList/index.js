import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchPosts } from '../../store/postReducer';


const PostsList = () => {
    const dispatch = useDispatch();

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
        </div>
    )
}

export default PostsList;
