import React, { Component } from 'react'
import CustomTextInput from "./CustomTextInput";

class RefParent extends Component {
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el}/>
        )
    }
}

export default RefParent;