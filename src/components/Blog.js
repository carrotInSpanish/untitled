import React, { Component } from 'react'

//Componenetes.
import Blogizquierda from './Blogizquierda';
import Blogcentral from './Blogcentral';
import Blogderecha from './Blogderecha';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Blogizquierda />
                <Blogcentral />
                <Blogderecha />
            </div>
        )
    }
}
