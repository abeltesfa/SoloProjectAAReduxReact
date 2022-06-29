import { csrfFetch } from "./csrf";
const LOAD_COMMENTS = '/comments/loadComments';


const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}

export const getComments = (postId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${postId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments))
    }
};

const initialState = {};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            const newState = {};
            action.comments.forEach(
                (comment) => (newState[comment.id] = comment)
            );
            return newState;
        default:
            return state;
    }

}

export default commentReducer;
