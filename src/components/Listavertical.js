import React, { Component } from 'react'

export default class Listavertical extends Component {
    
    Styloa () {
        return {
            textDecoration: "none",
            color: "black"
        }
    }

    render() {
        return (
            <div>
                <p>
                    <a href="/Portada" style={this.Styloa()}>Portada</a>
                    <a href="/Blog" style={this.Styloa()}>Blog</a> @ 
                    <a href="/Coleccion" style={this.Styloa()}>Coleccion</a>
                </p>
            </div>
        )
    }
}
