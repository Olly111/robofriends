import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  // on mount - fetch user JSON and fill state using fetch API
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // fetch API
      .then(response => response.json())                // convert response to JSON
      .then(users => this.setState({robots: users}))    // use JSON response to fill state    
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { searchField, robots } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (!robots.length) {
      return <div className="tc"><h1 className="pageTitle ma4 f1">Loading...</h1></div>
    } else {
      return (
        <div className="tc">
          <h1 className="pageTitle ma4 f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }   
  }
}

export default App;