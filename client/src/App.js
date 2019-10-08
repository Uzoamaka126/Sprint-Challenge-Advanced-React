import React, { Component } from 'react';
import REACTDOM from 'react-dom';
import './App.css';
import Axios from 'axios';
import NavBar from './components/Navbar'
import PlayersList from './components/PlayersList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      players: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/players')
    .then(res => {
      // console.log(res)
      this.setState({
        players: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayersList players={this.state.players} />
      </div>
    )
  }
}

