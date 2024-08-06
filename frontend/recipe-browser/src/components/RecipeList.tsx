import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Recipe from './Recipe';

const RecipeList: React.FC = () => {
    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipies = async () => {
            const response = await api.get('/recipes/');
            setRecipes(response.data);
        };
        fetchRecipies();
    }, []);
    return (
        <div>
            {recipes.map((recipe: any) => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
