import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LogButton extends Component {
    render(){
        const isLoggedIn = this.props.isToggleOn;
        let button = null;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.props.handleLogoutClick}/>
        }else{
            button = <LoginButton onClick={this.props.handleLoginClick}/>
        }

        return (
            <div>
                {button}
            </div>
        )
    }
}

export default LogButton;