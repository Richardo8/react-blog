import React, { Component } from 'react';
import TemperatureInput from "./TemperatureInput";
import func from "./function";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? func.tryConvert(temperature, func.toCelsius) : temperature
        const fahrenheit = scale === 'c' ? func.tryConvert(temperature, func.toFahrenheit) : temperature

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
}

export default Calculator;