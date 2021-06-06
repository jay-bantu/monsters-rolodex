import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Cardlist from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component{
  constructor(){
    super()
    this.state ={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  render(){
    const {monsters, searchField} = this.state;

    const FilteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return(
      <div>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder= 'search'   handleChange ={e =>{this.setState({searchField: e.target.value})}} />
        <Cardlist monsters = {FilteredMonsters}/> 
      </div>
    )
  }
  
}

export default App;
