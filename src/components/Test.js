import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Portada from './Portada';
import Blog from './Blog';

export default class Test extends Component {
    
    render() {
        return (
            <div>
                <Router>
                    <Link to="/">Home</Link>
                    <br/>
                    <Link to="/portada">Portada</Link>
                    <br/>
                    <Link to="/blog">Blog</Link>
                    <Route exact path="/portada" component={Portada}/> 
                    <Route exact path="/blog" component={Blog} />
                </Router>
            </div>
        )
    }
}
