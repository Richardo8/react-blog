import React, { Component } from 'react';
import FormattedData from './FormattedData';

class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
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

    render(){
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedData date={this.state.date}/>
            </div>
        )
    }
}

export default Example;