import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../store/postReducer';
import './EditPost.css'


const EditPost = ({ singlePost, hideForm }) => {
  const [title, setTitle] = useState(singlePost.title);
  const [body, setBody] = useState(singlePost.body);

  // const session = useSelector(state => state.session);


  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...singlePost,
      title,
      body
    };

    let updatedPost = dispatch(updatePost(payload));
    if (updatedPost) {
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };



  return (
    <div className='edit-post-outer'>
      <div className='edit-post-container'>
        <div className='edit-inputBox'>
          <div className='edit-post-title'>
            <h1>Edit Post</h1>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder='Title'
                name='title'
                required
              />
            </div>
            <div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name='body'
                placeholder='Add your post'
                rows='10'
                required
              ></textarea>
            </div>
            <div>
              <button className='edit-post-submit-btn' type='submit'>Update Post</button>
              <button className='edit-post-submit-btn' type="button" onClick={handleCancelClick}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );




};

export default EditPost;
