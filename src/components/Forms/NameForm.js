import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            select: 'lime'
        };

    }

    handleChangeInput = (e) => {
        this.setState({
            value: e.target.value.toUpperCase(),
        })
    }

    handleChangeSelect = (e) => {
        this.setState({
            select: e.target.value,
        })
    }

    handleSubmit = (e) => {
        console.log('A name was submitted: ' + this.state.value + ' and ' + this.state.select);
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChangeInput}/>
                    <textarea value={this.state.value} onChange={this.handleChangeInput} />
                    Pick your favorite La Croix Flavor:
                    <select value={this.state.select} onChange={this.handleChangeSelect}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default NameForm;