import React from 'react';
import './Head.css';
import Header from './Header/Header';

function Head() {
  return (
    <div className='head'>
      <Header className='header__contain' />

      <div className='head__info'>
        <h1>Create your comfort zone.</h1>
        <a href='#'>Shop now</a>
      </div>
    </div>
  );
}

export default Head;
