import React, { Component } from 'react'

export default class Blogderecha extends Component {
    Stylodiv () {
        return{
            height: "100%",
            width: "33%",
            background: "#00B2FF"
        }
    }
    
    render() {
        return (
            <div style={this.Stylodiv()}>
            </div>
        )
    }
}
