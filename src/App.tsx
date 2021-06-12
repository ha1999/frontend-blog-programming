import React from 'react';
import './App.scss';
import AppRoute from './core/router';

function App():JSX.Element{
  return (
    <div className="App">
      <header className="App-header">
        <AppRoute />
      </header>
    </div>
  );
}

export default App;
