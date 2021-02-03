import React, { Component } from 'react';

export default class Lista extends Component {
    
    Styloul () {
        return {
            listStyleType: "none",
            padding: "10px 10px 10px 10px"
        }
    }

    Styloa () {
        return {
            textDecoration: "none",
            color: "black"
        }
    }

    
    render() {
        return (
            <div>
                <ul style={this.Styloul()}>
                    <li><a href="/Portada" style={this.Styloa()}>Portada</a></li>
                    <li><a href="/Blog" style={this.Styloa()}>Blog</a></li>
                    <li><a href="/" style={this.Styloa()}>Colección</a></li>
                    <li><a href="/" style={this.Styloa()}>Tienda</a></li>
                    <li><a href="/" style={this.Styloa()}>Nosotros</a></li>
                    <li><a href="/" style={this.Styloa()}>FAQ</a></li>
                </ul>
            </div>
        )
    }
}
