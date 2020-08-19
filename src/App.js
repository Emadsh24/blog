import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserBar from './user/UserBar';
import Post from './post/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';

const user = 'Emad Shtay'
const posts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]
function App() {
  return (
  <div style={{padding:8}}>
    <UserBar/>
    <br/>
    <CreatePost user={user}/>
    <hr/>
    <PostList posts={posts}/>
  </div>
  );
}

export default App;
