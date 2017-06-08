import React, { Component } from 'react';
import SideBar from './SideBar';
import Content from './Content'

class Blog extends Component {
    render(){
        const posts = this.props.posts;
        return(
            <div>
                <SideBar posts={posts}/>
                <hr/>
                <Content posts={posts}/>
            </div>
        )

    }
}

export default Blog;