import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>Oops!</h1>
        <p>The page you're looking for doesn't exist!</p>
        <p>But maybe something tasty is waiting elsewhere.</p>
        <a href='/'>Go back</a>
      </div>
      <div className="not-found-image">
        <img src="https://media.giphy.com/media/3o85xuO1siCT2Q0Dag/giphy.gif" alt="Funny Chef" />
      </div>
    </div>
  );
}

export default NotFound;
