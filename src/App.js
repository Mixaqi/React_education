import React, { Component } from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
      <div>
        <img src ='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
      </div>
      <div>
        New post
      </div>
      <div>
        <div>
          post1
        </div>
        <div>
          post 2
        </div>
      </div>
      </div>
    </div>);
}

export default App;
