import React, { Component } from 'react'

//Componentes
import Logo from './Logo.js';
import Lista from './Lista.js';
import Socmed from './Socmed';

export default class Opciones extends Component {
    
    Stylodiv() {
        return {
            fontSize: "30px",
            paddingTop: "10px",
            paddingRight: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            width: "100%",
            height: "100%"
        }
    } 
    
    render() {
        return (
            <div  style={this.Stylodiv()}>
                <Logo />
                <Lista />
                <Socmed />
            </div>
        )
    }
}
