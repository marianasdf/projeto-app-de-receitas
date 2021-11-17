import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';


function IngredientsCard({ index, image, ingredients, foodOrDrink}){
  const history = useHistory();
  
  function handleClick() {
    history.push(`/${foodOrDrink}?ingredient=${ingredients}`);
   
  }
 return(
   <div>
     <button type="button" onClick={ handleClick }>
    <section data-testid={ `${index}-ingredient-card` }>
      <img src={ image } data-testid={ `${index}-card-img` } alt="ingredient" />
      <h4 data-testid={ `${index}-card-name` }>{ ingredients }</h4>
    </section>
    </button>
    </div>
 );  
}

 IngredientsCard.propTypes = {
  index: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
} 

export default IngredientsCard;