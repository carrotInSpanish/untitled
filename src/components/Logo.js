import React, { Component } from 'react';
import LogoI from '../media/untitled-white.png';

export default class Logo extends Component {
    
    Styloimg () {
        return{
            width: '350px',
        }
    }

    Styloa () {
        return {
            
        }
    }

    render() {
        return (
            <a href="/" style={this.Styloa()}>
                <img src={LogoI}  id="logo" alt="E we, nuestro logo no cargo :´c" style={this.Styloimg()}/>
            </a>
        )
    }
}
