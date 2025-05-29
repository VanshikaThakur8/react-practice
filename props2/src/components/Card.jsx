import React from 'react';

function Card({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;
