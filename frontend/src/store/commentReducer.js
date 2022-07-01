import { csrfFetch } from "./csrf";
const LOAD_COMMENTS = '/comments/loadComments';
const ADD_COMMENT = '/comments/addComments';
const DELETE_COMMENT = '/comments/deleteComments'


const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const deleteComment = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

export const getComments = (postId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${postId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments))
    }
};

export const createComment = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(addComment(comment));
        return comment;
    }
};

export const removeComment = (commentId) => async dispatch => {
    const response = await csrfFetch(`/api/comments`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentId)
    });

    if (response.ok) {
        const commentId = await response.json();
        dispatch(deleteComment(commentId));
        return commentId;
    }
}

const initialState = {};


const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            const newState = {};
            action.comments.forEach(
                (comment) => (newState[comment.id] = comment)
            );
            return newState;

        case ADD_COMMENT:
            const newState2 = { ...state, [action.comment.id]: action.comment }
            return newState2;

        case DELETE_COMMENT:
            const newState3 = {...state}
            delete newState3[action.commentId]

            return newState3;

        default:
            return state;
    }

}

export default commentReducer;
