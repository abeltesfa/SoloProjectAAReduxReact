import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { fetchPosts } from '../../store/postReducer';
import "./PostsList.css"


const PostsList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const posts = useSelector(state => state.posts);
    const session = useSelector(state => state.session);





    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
    }, [posts]);


    return (
        <div className='body-posts-container'>
            <div className='body-leftside-container'>
            <div className='body-rightside-container'>
            <div className='body-middle-container'>
                {session.user &&
                    <button onClick={() => history.push('./posts/new')}>Create Post</button>
                }
                <ul>
                    {Object.values(posts).map(({ id, title, body }) => (
                        <div className='home-links-container' key={id}>
                            <li><NavLink to={`/posts/${id}`} className='home-body-links'>
                                <div><h3>{title}</h3></div>
                                <div className='homeBodyLink'>{body}</div>
                                </NavLink></li>
                        </div>
                    ))}
                </ul>
            </div>
            </div>
            </div>
        </div>
    )
}

export default PostsList;
