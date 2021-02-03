import React, { Component } from 'react'

export default class Blogcentral extends Component {
    Stylodiv () {
        return{
            height: "100%",
            width: "33%",
            background: "#FF5D00"
        }
    }
    
    state = {
        posts:[]
    }
    
    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts: data})
    }
    
    render() {
        return (
            <div style={this.Stylodiv()}>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
