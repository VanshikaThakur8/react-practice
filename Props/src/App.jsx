import React from 'react';
import Usercard from './components/Usercard';

function App() {
  return (
    <div>
      <h1>User Information</h1>
      <Usercard name="Vanshika Thakur" age={21} isOnline={true} />
      <Usercard name="Abhijeet Thakur" age={30} isOnline={false} />
    </div>
  );
}

export default App;

