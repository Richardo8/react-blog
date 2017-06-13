import React, { Component } from 'react';
import FancyBorder from "./FancyBorder";

class WelcomeDialog extends Component {
    render(){
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    Welcome
                </h1>
                <p className="Dialog-message">
                    Thank you visiting out spacecraft
                </p>
            </FancyBorder>
        )
    }
}

export default WelcomeDialog;