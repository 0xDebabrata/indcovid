import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            stateData: []
        }
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
        
        if (this.state.stateData.length === 0) {
            return (<h1 className='loading'>Loading...</h1>)
        } else {
            return (
                <div className='parent'>
                    <h1 className='heading'>India COVID-19 Data</h1>
                    <List stateData={this.state.stateData} />
                </div>
            )
        }

    }
}

export default App;
