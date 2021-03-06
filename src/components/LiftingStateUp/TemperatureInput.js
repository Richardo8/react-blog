import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     temperature: ''
        // }
    }

    handleChange = (e) => {
        // before
        // this.setState({
        //     temperature: e.target.value
        // })

        this.props.onTemperatureChange(e.target.value)
    }

    render(){
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input
                    type="number"
                    value={this.props.temperature}
                    onChange={this.handleChange} />
                {/*<BoilingVerdict celsius={parseFloat(this.state.temperature)}/>*/}
            </fieldset>
        )
    }
}

export default TemperatureInput;