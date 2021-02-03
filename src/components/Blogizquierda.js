import React, { Component } from 'react'

export default class Blogizquierda extends Component {
    
    Stylodiv () {
        return{
            height: "100%",
            width: "33%",
            background: "#000000"
        }
    }
    
    render() {
        return (
            <div style={this.Stylodiv()}>
                <h1>Hello world</h1>
            </div>
        )
    }
}
