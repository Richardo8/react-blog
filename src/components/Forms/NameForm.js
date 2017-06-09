import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value.toUpperCase(),
        })
    }

    handleSubmit = (e) => {
        console.log('A name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default NameForm;