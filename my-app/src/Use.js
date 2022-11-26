import React, { useState } from 'react';

function Use() {
  const [name, setName] = useState(0);

  return (
    <div>
      <p>You clicked {name} times</p>
      <button onClick={() => setName(name+2)}>
        Click
      </button>
    </div>
  );
}
export default Use;