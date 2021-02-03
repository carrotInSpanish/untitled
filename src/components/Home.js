import React, { Component } from 'react';

//Componentes
import Opciones from './Opciones';
import HeroSection from './HeroSection';

export default class Home extends Component {
    
    render() {
        return (
            <>
                <HeroSection />
                <Opciones />
            </>
        )
    }
}
