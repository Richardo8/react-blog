import React, { Component } from 'react';

class Content extends Component {
    render(){
        return (
            <div>
                {this.props.posts.map((post) =>
                    <div key={post.id} id={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Content;