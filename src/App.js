import React from 'react';
import './App.css';
import Home from './Home'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello Mayur',
      age: 21
    }
  }

  // Todo Input elements

  changeMessage = (name) => {
    this.setState(prevState => {
      let newState = prevState;

      newState.message = `Hello ${name}`;

      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <button onClick={e => this.changeMessage("dhruvik")}>Click me</button>

          {
            this.state.message == 'Hello Mayur' ?
              <Home
                message={this.state.message}
              />
              :
              ''
          }

        </header>
      </div>
    );
  }
}

export default App;
