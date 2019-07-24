import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBar} from './components/search-bar/search-bar.component';
import './style.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) );

    return(
      <div className='App background'>

        <div className="title display-2 pt-3">Monsters Rolodex</div>
        <SearchBar placeholder="Filter Monsters..." handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
        
      </div>
    );
  }
}

export default App;
