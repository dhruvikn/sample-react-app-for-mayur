import React from 'react';
import './App.css';
import Home from './Home'
import FormComponent from './FormComponent';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello Mayur',
      age: 21
    }
  }

  // HTML to jsx Converter
  // https://magic.reactjs.net/htmltojsx.htm

  // UI Frameworks - Alternative to bootstrap
  // semantic-ui.com
  // bulma.io

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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>

        <header className="App-header">
          <button onClick={e => this.changeMessage("mayur")} className="btn btn-primary mb-3">Click me</button>

          {
            this.state.message == 'Hello Mayur' ?
              <Home
                message={this.state.message}
              />
              :
              ''
          }

          <FormComponent />
        </header>
      </div>
    );
  }
}

export default App;
