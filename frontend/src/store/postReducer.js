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

    if (response.ok){
        dispatch(loadPosts(posts));
        return posts
    }
};

export const createPost = (payload) => async (dispatch) => {
    const {userId, title, body, image} = payload;
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("title", title);
    formData.append("body", body);
    if (image) formData.append("image", image);

    const response = await csrfFetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData
    });

    if (response.ok) {
      const post = await response.json();
      dispatch(addPost(post));
      return post;
    }
  };


export const updatePost = post => async dispatch => {
    const {title, body, image} = post;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    if (image) formData.append("image", image);

    const response = await csrfFetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
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
