import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <imput type="text" ref="input" />
                <button onClick={this.handleClick}>
                    Add
                </button>
            </div>
        )
    }

    handleClick = (e) => {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = ''
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}