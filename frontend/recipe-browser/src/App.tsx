import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/recipes/:id" component={RecipePage}/>
      <Route path="/add-recipe" component={AddRecipe} />
    </Switch>
  </Router>
);



export default App;
