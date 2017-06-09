import React, { Component } from 'react';
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }

    render(){
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    type="number"
                    value={this.state.temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(this.state.temperature)}/>
            </fieldset>
        )
    }
}

export default Calculator;