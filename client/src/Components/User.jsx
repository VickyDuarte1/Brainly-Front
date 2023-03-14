import React from 'react';

export default function User({ login }) {
  return (
    <div className='user'>
      <h2>{login}</h2>
    </div>
  );
}