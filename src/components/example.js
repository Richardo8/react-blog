import React, { Component } from 'react';
import FormattedData from './FormattedData';
import Greeting from './Greeting';
import LogButton from './LogButton';
import MailBox from './MailBox';
import WarningBanner from './WarningBanner';
import Numbers from './Numbers';
import Blog from './Keys/Blog';
import NameForm from './Forms/NameForm';
import Reservation from "./Forms/Reservation";
import Calculator from "./LiftingStateUp/Calculator";
import WelcomeDialog from "./CompositionInheritance/WelcomeDialog";
// import SplitPane from "./CompositionInheritance/SplitPane";
import FilterableProductTable from "./ThingkingInReact/FilterableProductTable";

class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true,
            posts: [
                {id: 1, title: 'Hello World', content: 'Welcome to learning React'},
                {id: 2, title: 'Installation', content: 'You can install React from npm'}
            ],
            PRODUCT: [
                {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
                {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
                {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
                {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
                {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
                {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
            ],
        }
        // this.handleClick = this.handleClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            date: new Date(),
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked');
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }))
    }

    handleLoginClick = () => {
        this.setState({
            isToggleOn: true,
        })
    };

    handleLogoutClick = () => {
        this.setState({
            isToggleOn: false
        })
    }

    async getData(){
        return await fetch('./data.json');
    }

    render(){
        const messages = ['React', 'JS', 'Vue'];
        const Products = this.getData();
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedData date={this.state.date}/>
                <a href="#" onClick={this.handleClick}>
                    Click Me
                </a>
                <h>{this.state.isToggleOn ? 'on' : 'off'}</h>
                <Greeting isLoggedIn={this.state.isToggleOn}/>
                <LogButton handleLoginClick={this.handleLoginClick} handleLogoutClick={this.handleLogoutClick} isToggleOn={this.state.isToggleOn}/>
                <MailBox unreadMessages={messages}/>
                <WarningBanner warn={this.state.isToggleOn}/>
                <Numbers numbers={[1,2,3,4,5]}/>
                <Blog posts={this.state.posts}/>
                <NameForm/>
                <Reservation/>
                <Calculator/>
                <WelcomeDialog/>
                {/*<SplitPane left={<Contacts/>} right={<Chat/>}/>*/}
                <FilterableProductTable products={this.state.PRODUCT}/>
            </div>
        )
    }
}

export default Example;
