import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Card title="About Me">
        <p>Hello! I am a React developer</p>
      </Card>

      <Card title="My Hobbies">
        <ul>
          <li>Coding</li>
          <li>Reading</li>
          <li>Painting</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;





