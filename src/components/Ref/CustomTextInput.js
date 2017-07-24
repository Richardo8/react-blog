import React, { Component } from 'react';

class CustomTextInput extends Component {
    focus = () => {
        this.textInput.focus();
    }

    render() {
        const inputRef = this.props.inputRef;
        return (
            <div>
                <input
                    type="text"
                    ref={(inputRef) => {this.textInput = inputRef}} />
                <input
                    type="button"
                    value="focus this text input"
                    onClick={this.focus} />
            </div>
        )
    }
}

export default CustomTextInput;