import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../store/postReducer';


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
    <div className='edit-inputBox'>
      <h1>Edit Post</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Add your post'
          rows='10'
          required
        ></textarea>
        <button type='submit'>Update Post</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </div>
  );




};

export default EditPost;
