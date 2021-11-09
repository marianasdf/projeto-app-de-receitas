import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </RecipesProvider>
  );
}

export default App;
