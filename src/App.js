import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
<<<<<<< HEAD
      <div className="meals">
        <h2>Projeto em grupo</h2>
        <span className="logo">TRYBE</span>
=======
>>>>>>> e693b78b8bfda08454203ad60919d6b612923629
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
