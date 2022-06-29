import { csrfFetch } from "./csrf";
const LOAD_COMMENTS = '/comments/loadComments';
const ADD_COMMENT = '/comments/addComments'


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
            const newState2 = {...state,  [action.comment.id]: action.comment}
            return newState2;
        default:
            return state;
    }

}

export default commentReducer;
