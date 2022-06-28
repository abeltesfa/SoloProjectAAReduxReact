import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const EditPost = ({singlePost, hideForm}) => {
    const [title, setTitle] = useState(singlePost.title);
    const [body, setBody] = useState(singlePost.body);

};

export default EditPost;
