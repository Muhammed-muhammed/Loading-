import React, { useState } from 'react';
import CarLoader from './CarLoader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <CarLoader show={loading} />
      <button onClick={() => setLoading(!loading)} style={{ marginTop: '2rem' }}>
        Toggle Loader
      </button>
    </div>
  );
}

export default App;