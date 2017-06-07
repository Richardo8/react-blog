import React, { Component } from 'react';
import FormattedData from './FormattedData';

class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            date: new Date(),
        })
    }

    handleClick(e){
        e.preventDefault();
        console.log('The link was clicked');
    }

    render(){
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedData date={this.state.date}/>
                <a href="#" onClick={this.handleClick}>
                    Click Me
                </a>
            </div>
        )
    }
}

export default Example;
