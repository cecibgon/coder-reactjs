import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  const welcomeMessage = '¡Bienvenido a Tu Tienda!';

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={welcomeMessage} />
    </div>
  );
}

export default App;