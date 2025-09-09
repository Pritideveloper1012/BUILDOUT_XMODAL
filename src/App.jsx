
import { useState } from 'react';
import './App.css'
import XModal from './Component/XModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      {/* Open Form button */}
      <button onClick={() => setIsModalOpen(true)}>Open Form</button>

      {/* Modal Component */}
      <XModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
