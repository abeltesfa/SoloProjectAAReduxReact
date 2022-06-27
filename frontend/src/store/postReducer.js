import { csrfFetch } from "./csrf";
const LOAD_POSTS = 'posts/loadPosts';

export const loadPosts = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
    };
};

export const fetchPosts = () => async (dispatch) => {
    const response = await csrfFetch('/api/posts');
    const posts = await response.json();

    if (response.ok){
        dispatch(loadPosts(posts));
    }
};

const initialState = { entries: {} }

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            const newState = {...state, entries: { ...state.entries }};
            action.posts.forEach(
                (post) => (newState.entries[post.id] = post)
            );
            return newState;
        default:
            return state;
    }
}

export default postReducer;
