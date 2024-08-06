import React from 'react';
import { Link } from 'react-router-dom';

const Recipe: React.FC<{ recipe: any }> = ({ recipe }) => (
  <div>
    <h2>{recipe.title}</h2>
    <p>{recipe.description}</p>
    <Link to={`/recipes/${recipe.id}`}>View Details</Link>
  </div>
);

export default Recipe;
