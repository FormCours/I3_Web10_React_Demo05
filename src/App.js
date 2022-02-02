import { useState } from 'react';
import './App.css';
import Reservoir from './components/reservoir/reservoir';

function App() {

  const [message, setMessage] = useState('');


  return (
    <div className="App">
      <h1>Demo 05 - La communication</h1>

      <h2>Gestion du reservoir</h2>
      <Reservoir />

      {message && (
        <p>{message}</p>
      )}
    </div>
  );
}

export default App;
