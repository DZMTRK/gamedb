import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>My favorite computer games list</h1>
    </div>
  );
};

export default AppHeader;
