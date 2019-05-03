import React, { Component } from 'react';
import './App.css';
import CreateThought from './CreateThought/CreateThought';
import { ThoughtList } from './ThoughtList/ThoughtList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }

  createThought = (thought) => {
    const { thoughts } = this.state
    const newThought = {...thought, id: thoughts.length}
    this.setState({ thoughts: [...thoughts, newThought] });
  }

  deleteThought = (id) => {
    const thoughts = this.state.thoughts.filter(thought => thought.id !== id);
    this.setState({ thoughts });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ThoughtBox</h1>
        </div>
        <CreateThought createThought={this.createThought} />
        <div>
          <ThoughtList deleteThought={this.deleteThought} thoughtList={this.state.thoughts} />
        </div>
      </div>
    );
  }
}

export default App;
