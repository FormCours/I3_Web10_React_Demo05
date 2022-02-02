import { useState } from 'react';
import './App.css';
import Reservoir from './components/reservoir/reservoir';
import SearchBar from './components/search-bar/search-bar';

function App() {

  const [message, setMessage] = useState('');

  const handleReservoirPlein = () => {
    setMessage('Le reservoir est plein');
  };

  const handleReservoirVide = () => {
    setMessage('Le reservoir est vide');
  };

  const handleSearchResult = (data) => {
    console.log('On recherche : ' + data);
  }

  return (
    <div className="App">
      <h1>Demo 05 - La communication</h1>

      <h2>Gestion du reservoir</h2>
      <Reservoir max={15}
        onReservoirPlein={handleReservoirPlein}
        onReservoirVide={handleReservoirVide} />
      {message && (
        <p>{message}</p>
      )}

      <h2>Barre de recherche</h2>
      <SearchBar hint="Qu'est ce que tu veux rechercher ma gueule ?!"
        onSearch={handleSearchResult} />
    </div>
  );
}

export default App;
