import React, { Component } from 'react';

class FormattedData extends Component {
    render(){
        return (
            <h2>{this.props.date.toLocaleTimeString()}</h2>
        )
    }
}

export default FormattedData;