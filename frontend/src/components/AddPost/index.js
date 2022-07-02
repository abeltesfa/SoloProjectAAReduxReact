import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../store/postReducer';
import './AddPost.css'

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

  const onSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (validationErrors.length) return alert(`Cannot Submit`);

    const formInformation = {
      userId: user.id,
      title,
      body
    }

    const post = await dispatch(createPost(formInformation))
    if (post) {
      history.push(`/posts/${post.id}`)
    }
    setHasSubmitted(false);
  }

  return (
    <div className='create-post-container'>
      <div className='inputBox'>
        <div>
        <h1>Create Post</h1>
        </div>
        <div>
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
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder='Title'
              name='title'
              className='create-post-title-input'
            />
          </div>
          <div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              name='body'
              placeholder='Add your post'
              rows='10'
              className='create-post-body-input'
            ></textarea>
          </div>
          <div>
            <button className='create-post-submit-btn' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
