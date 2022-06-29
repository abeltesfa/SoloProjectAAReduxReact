import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../store/commentReducer';


const AddComment = ({ hideForm, postId }) => {
    const [body, setBody] = useState('');
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();


    const onSubmit = async(e) => {
        e.preventDefault();

        const formInformation = {
            userId: user.id,
            postId: postId,
            body
        }
        hideForm();
        await dispatch(createComment(formInformation));

      }
      const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
      };

    return (
        <div>
            <h3>Add Comment</h3>
            <form onSubmit={onSubmit}>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              name='body'
              placeholder='Add your comment'
              rows='10'
              required
            ></textarea>
            <button type='submit'>Submit</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </form>
        </div>
    )
}

export default AddComment;
