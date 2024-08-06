import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import api from '../services/api';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        const response = await api.get(`/recipes/${id}`);
        setRecipe(response.data);
      };

      fetchRecipe();
    }
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {id && <CommentList recipeId={parseInt(id, 10)} />}
    </div>
  );
};

export default RecipePage;
