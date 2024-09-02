import React, { useEffect, useRef, useState } from 'react';

function App() {
  const text = 'Loading...';
  return (
    <div className="">
      <h4>
        {text.split('').map((char, index) => (
          <span className="char" style={{ '--char-index': index }} key={index}>
            {char}
          </span>
        ))}
      </h4>
    </div>
  );
}

export default App;
