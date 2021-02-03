
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//Componentes.
import Home from './components/Home';
import Portada from './components/Portada';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/portada" component={Portada}/> 
      <Route exact path="/blog" component={Blog} />
    </Router>
  )
}

export default App;
