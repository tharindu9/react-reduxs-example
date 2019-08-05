import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForms';
import { Provider } from 'react-redux';
import {createStore ,applyMiddleware } from 'redux';
import store from './store'

class App extends Component {

  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             React Redux
             
          </a>
        </header>
        <PostForm />
        <hr/>
        <Post/>
      </div>
      </Provider>
    );
  }
 
}

export default App;
