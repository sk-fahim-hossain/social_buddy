import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title,body,id} = props.post;
    console.log(props.post)
    const postStyle = {
        margin:'10px',
        padding: '10px',
        backgroundColor: '#9370DB',
        border: '1px solid blue',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
    }
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <p><i>{body}</i></p>
            <Link to={`/post/comments/${id}`}><p>Comments</p></Link>
            
        </div>
    );
};

export default Post;