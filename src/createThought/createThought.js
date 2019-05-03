import React, { Component } from 'react';
import './_CreateThought.scss'

class CreateThought extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createThought(this.state);
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Add A New Thought</h2>
        <input 
          onChange={this.handleChange} 
          type="text" 
          name="title" 
          placeholder="title"
          value={this.state.title}
        />
        <input 
          onChange={this.handleChange} 
          type="text" 
          name="body" 
          placeholder="body" 
          value={this.state.body} 
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CreateThought
