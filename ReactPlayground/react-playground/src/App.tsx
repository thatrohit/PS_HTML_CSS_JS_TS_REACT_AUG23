import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Post } from './components/post.component';
import { PostModel } from './models/post';

function App() {
  let post: PostModel = {
    title: 'Hey!',
    body: 'This is a sample body with some sample text'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Post postDetails={post}/>
      </header>
    </div>
  );
}

export default App;
