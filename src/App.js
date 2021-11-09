import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <div className="meals">
        <span className="logo">TRYBE</span>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </RecipesProvider>
  );
}

export default App;
