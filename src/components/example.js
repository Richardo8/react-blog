import React, { Component } from 'react';
import FormattedData from './FormattedData';
import Greeting from './Greeting';

class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true,
        }
        // this.handleClick = this.handleClick.bind(this);
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

    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked');
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }))
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
                <h>{this.state.isToggleOn ? 'on' : 'off'}</h>
                <Greeting isLoggedIn={this.state.isToggleOn}/>
            </div>
        )
    }
}

export default Example;
