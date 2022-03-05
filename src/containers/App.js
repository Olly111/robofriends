import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  // on mount - fetch user JSON and fill state using fetch API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // fetch API
      .then(response => response.json())                // convert response to JSON
      .then(users => setRobots(users))    // use JSON response to fill state
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  if (!robots.length) {
    return (
      <div className="tc">
        <h1 className="pageTitle ma4 f1">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="tc">
        <h1 className="pageTitle ma4 f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;