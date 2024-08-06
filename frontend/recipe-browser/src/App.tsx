import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import AddRecipe from './pages/AddRecipe';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes/:id" component={RecipePage} />
      <Route path="/add-recipe" component={AddRecipe} />
    </Switch>
  </Router>
);

export default App;
