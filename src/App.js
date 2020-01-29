import React from 'react'
import {CardList} from "./components/card-list/card-list-component";
import './App.css'
import {SearchBox} from './components/seach-box/seach-box.coponent'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };

    };

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    };

    handleChange = (e) => {

        this.setState({searchField: e.target.value})
    };


    render() {
        const {monsters, searchField} = this.state;
        const fiteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1> Monsters Rolodex</h1>
                <SearchBox placeholder="search monster" handleChange={this.handleChange}/>
                <CardList monsters={fiteredMonsters}/>
            </div>
        );
    }

}

export default App;
