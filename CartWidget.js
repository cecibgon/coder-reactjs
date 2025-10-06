import React, { useState } from 'react';

function ToggleComponent() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
      {isToggled && <p>¡El toggle está activado!</p>}
    </div>
  );
}

export default ToggleComponent;