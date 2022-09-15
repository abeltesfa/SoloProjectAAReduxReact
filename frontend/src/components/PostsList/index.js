import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { fetchPosts } from '../../store/postReducer';
import "./PostsList.css"
import aboutPic from './IMG_0788.JPG'
import SearchBar from '../SearchBar';


const PostsList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const posts = useSelector(state => state.posts);
    const session = useSelector(state => state.session);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
    }, [posts]);


    return (
        <div className='body-posts-container'>
            <div className='body-leftside-container'>
                <div className='welcome-text'>
                    <h1>Welcome to extraMedium</h1>
                    {!user && (<p>(Please sign in to create posts)</p>)}
                    <h3>extraMedium is a site where users can create posts about their favorite topics. </h3>
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>
            <div className='body-middle-container'>
                <div className='body-create-post-btn-container'>
                    {session.user &&
                        <button className='body-create-post-btn' onClick={() => history.push('./posts/new')}>Create Post</button>
                    }
                </div>
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
            <div className='body-rightside-container'>
                <div>
                    <h1>About:</h1>
                </div>
                <div>
                    <img className='aboutPic' alt='about' src={aboutPic}></img>
                </div>
                <div>
                    Link to the project <a href='https://github.com/abeltesfa/SoloProjectAAReduxReact'>repo</a>
                </div>

                <div>
                    Link to my <a href='https://github.com/abeltesfa'>Github</a>
                </div>
                <div>
                    Link to my <a href='https://www.linkedin.com/in/abel-tesfa-93121866/'>LinkedIn</a>
                </div>
                <div>
                    <h2>Technologies Used:</h2>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>CSS</li>
                        <li>Express</li>
                        <li>Sequelize</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default PostsList;
