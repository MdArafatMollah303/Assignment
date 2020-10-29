import React from 'react';
import { Link } from 'react-router-dom';
//import Comment from './Comment/Comment';

const Posts = (props) => {
    const{title, body, id} = props.post;
    
   // const{title, body}=props.comment;
    const postStyle = {
        border : '1px solid black',
        margin : '25px',
        padding : '25px',
        'borderRadious': '5px',
    }
    return (
        <div style = {postStyle}>
            <h3>{title}</h3>
            <p>{body}</p>
            <button><Link to = {`/post/${id}`}>More</Link></button>
        <p><Link to = {`/comment/${id}`}>Comment</Link></p>
            
            </div>
    );
};


export default Posts;