import React, { Component } from 'react';
import List from './components/List';
import SearchBox from './components/SearchBox';
import Navbar from './components/Navbar';
import Donation from './components/Donation'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            stateData: [],
            searchfield: '',
            state: 'data'
        }
    }

    onStateChange = (event) => {
      const page = event.target.className;
      this.setState({ searchfield: '', state: page })

      const highlight = () => {
        const element = document.getElementsByTagName('li');
        console.log('state', this.state.state)
        for (var i = 0, len = element.length; i < len; i++ ) {
          const list = element[i].classList;
          console.log(list)
          if (list[0] === page) {
            element[i].classList.add('activenav')
          } else {
            element[i].classList.remove('activenav')
          }
        }
      }
      highlight(this.state.state);
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
      fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => this.setState({ stateData: data['statewise'] }))
    }

    render() {
        const filter = this.state.stateData.filter(state => {
            return state.state.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.state === 'data') {
            if (this.state.stateData.length === 0) {
                return (<h1 className='loading'>Loading...</h1>)
            } else {
                return (
                    <div className='parent'>
                        <h1 className='heading'>COVID-19: India</h1>
                        <Navbar stateChange={this.onStateChange}/>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <List stateData={filter} />
                    </div>
                )
            }
        } else if (this.state.state === 'info') {
            return(
              <div className='parent'>
                  <h1 className='heading'>COVID-19: India</h1>
                  <Navbar stateChange={this.onStateChange}/>
              </div>
            )
        } else {
            return(
              <div className='parent'>
                  <h1 className='heading'>COVID-19: India</h1>
                  <Navbar stateChange={this.onStateChange} state={this.state.state}/>
                  <Donation />
              </div>
            )
        }
    }
}

export default App;
