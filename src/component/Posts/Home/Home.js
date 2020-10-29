import { useEffect, useState } from 'react';
//import Comment from '../Comment/Comment';
import Posts from '../Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  /*const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
    },[])*/
    return (
        <div>
        <p>Hello</p>
        <h1>Post length: {posts.length}</h1>
        {
          posts.map(post => <Posts post = {post}></Posts>)
        }
       
        </div>
    );
};

export default Home;