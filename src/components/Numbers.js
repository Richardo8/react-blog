import React, { Component } from 'react';

class Numbers extends Component {
    render(){
        const numbers = this.props.numbers;
        const listItem = numbers.map((number) => <li>{number}</li>)
        return (
            <ul>
                {listItem}
            </ul>
        )
    }
}

export default Numbers;