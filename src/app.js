import './app.scss';
import React from 'react';
import ToDo from './components/todo';
import Settings from './context/settings';
import Auth from './context/auth';

function App() {
  return (
    <div className="App">
      <Auth>
      <Settings>
         <ToDo />
      </Settings>
      </Auth>
    </div>
  );
}

export default App;