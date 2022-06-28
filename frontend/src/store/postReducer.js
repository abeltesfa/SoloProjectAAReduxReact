import { csrfFetch } from "./csrf";
const LOAD_POSTS = 'posts/loadPosts';
const ADD_POST = 'post/addpost'
const DELETE_POST = 'post/delete'

export const loadPosts = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
    };
};

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
}

export const removePost = (post) => {
    return {
        type: DELETE_POST,
        post
    }
}

export const fetchPosts = () => async (dispatch) => {
    const response = await csrfFetch('/api/posts');
    const posts = await response.json();
    // console.log(posts)

    if (response.ok){
        dispatch(loadPosts(posts));
    }
};

export const createPost = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const post = await response.json();
      dispatch(addPost(post));
      return post;
    }
  };


export const updatePost = post => async dispatch => {
    const response = await csrfFetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post));
        return post
    }

}

export const deletePost = (postId) => async dispatch => {
    const response = await csrfFetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(removePost(post));
        return post;
    }
}
// export const getOnePost = postId => async dispatch => {
//     const response = await csrfFetch(`/api/posts/${postId}`);

//     if (response.ok) {
//         const post = await response.json();
//         dispatch()
//     }
// }

const initialState = { }

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            const newState = {};
            action.posts.forEach(
                (post) => (newState[post.id] = post)
            );
            return newState;

        case ADD_POST:
            const newState2  = {...state,  [action.post.id]: action.post}

            return newState2;

        case DELETE_POST:
            const newState3 = {...state}
            delete newState3[action.postId]

            return newState3;
        default:
            return state;
    }
}

export default postReducer;
