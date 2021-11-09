import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
