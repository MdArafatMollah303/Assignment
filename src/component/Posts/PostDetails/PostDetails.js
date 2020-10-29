import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [posts, setPosts] = useState([]);
    const {commentId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[postId])
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[commentId])
    console.log(commentId);
    return (
        <div>
            <h1>title:{posts.title}</h1>
            <h4>Body: {posts.body}</h4>
            <p>{comments.body}</p>
        </div>
        
    );
};

export default PostDetails;