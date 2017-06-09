import React, { Component } from 'react';

class BoilingVerdict extends Component {
    render(){
        const celsius = this.props.celsius;
        if(celsius >= 100){
            return (
                <p>The water would boil</p>
            )
        }else{
            return (
                <p>The water would not boil</p>
            )
        }
    }
}

export default BoilingVerdict;