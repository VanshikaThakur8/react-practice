import React from 'react';


function Usercard ({ name, age, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default Usercard;
