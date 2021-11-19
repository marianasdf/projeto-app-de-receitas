import React from 'react';
import FavoriteCard from '../../components/FavoriteCard';
import Header from '../../components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <FavoriteCard />
    </div>
  );
}

export default FavoriteRecipes;
