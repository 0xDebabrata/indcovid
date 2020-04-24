import React, { Component } from 'react';
import List from './components/List';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            stateData: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
      fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => {
          this.setState({ stateData: data['statewise'] })
          console.log(data)})
        .then(console.log(this.state.stateData, 'state'))
    }

    render() {
        const filter = this.state.stateData.filter(state => {
            return state.state.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.stateData.length === 0) {
            return (<h1 className='loading'>Loading...</h1>)
        } else {
            return (
                <div className='parent'>
                    <h1 className='heading'>COVID-19: India</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <List stateData={filter} />
                </div>
            )
        }

    }
}

export default App;
