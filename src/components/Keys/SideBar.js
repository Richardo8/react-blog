import React, { Component } from 'react';

class SideBar extends Component {
    render(){
        return (
            <ul>
                {this.props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        )
    }
}

export default SideBar;