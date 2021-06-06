import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Cardlist from './components/card-list/card-list';

class App extends Component{
  constructor(){
    super()
    this.state ={
      monsters:[]
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  render(){
    return(
      <div>
        <Cardlist monsters = {this.state.monsters}/> 
      </div>
    )
  }
  
}

export default App;
