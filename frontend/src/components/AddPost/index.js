import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../store/postReducer';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const user = useSelector(state => state.session.user)


    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      const errors = [];

      if (title.length <= 0) {
        errors.push("Please enter a title")
      }
      if (body.length <= 0) {
        errors.push("Please enter text into the body")
      }

      setValidationErrors(errors)
    }, [title, body])

    const onSubmit = async(e) => {
      e.preventDefault();
      setHasSubmitted(true);

      if (validationErrors.length) return alert(`Cannot Submit`);

      const formInformation = {
          userId: user.id,
          title,
          body
      }

      const post = await dispatch(createPost(formInformation))
      if(post) {
        history.push(`/posts/${post.id}`)
      }
      setHasSubmitted(false);
    }

    return (
        <div className='inputBox'>
          <h1>Create Post</h1>
          {hasSubmitted && validationErrors.length > 0 && (
                <div>
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
          <form onSubmit={onSubmit}>
            <input
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder='Title'
              name='title'
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              name='body'
              placeholder='Add your post'
              rows='10'
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
}

export default AddPost;
