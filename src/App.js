import React from 'react';
import './App.css';
import CardList from './CardList.js';
import Form from './Form.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      profiles : []
    }
  }

  handleAddGitHub = (data) => {
      this.setState(prevState => ({
        profiles : [...prevState.profiles, data]
      }));
  }


  render() {
    return (
      <div>
        <h1 className="App">The GitHub Cards App</h1>
        <Form onSubmit={this.handleAddGitHub} />
        <CardList profiles = {this.state.profiles}/>
      </div>
    );
  }
}

export default App;
