import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './Redux/reducers';
import logo from './logo.svg';
import App1 from './containers/App';
import Example from './components/example';
import BasicExample from './RouterExample/RouterExample';
import URLParameters from "./RouterExample/URLParameters/URLParameters";
import AuthExample from "./RouterExample/Redirects/Redirects";
import CustomLinkExample from "./RouterExample/CutomLink/CustomLink"
import PreventingTransitionsExample from "./RouterExample/Preventing/Preventing"
import NoMatchExample from "./RouterExample/NoMatch/NoMatch"
import RecursiveExample from "./RouterExample/Recursive/Recursive"
import SidebarExample from "./RouterExample/Sidebar/Sidebar"
import './App.css';

let store = createStore(todoApp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<Example name="L" />*/}
        <BasicExample/>
        <URLParameters/>
          <AuthExample />
          <CustomLinkExample />
          <PreventingTransitionsExample/>
          <NoMatchExample/>
          <RecursiveExample />
          <SidebarExample/>
          <Provider store={store}>
              <App1 />
          </Provider>
      </div>
    );
  }
}


export default App;
