import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textvalue: 'write address here',
      isgoing: true,
      numberOfguest: 2
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangetext = this.handleChangetext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value : e.target.value
    });
  }

  handleChangetext(e) {
    this.setState({
      textvalue : e.target.value
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState ({
      [name] : value
    });
  }

  render() {
    return (
      <div>
      <form>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Address:
          <textarea value={this.state.textvalue} onChange={this.handleChangetext} />
        </label>
        <br />
        <h3> Handling Multiple Inputs </h3>
          <label>
            Is going:
            <input name="isgoing" type="checkbox"
            checked={this.state.isgoing}
            onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
              <input name="numberOfguest" type="number"
              value={this.state.numberOfguest}
              onChange={this.handleInputChange}/>
          </label>



      </form>
      </div>
    );
  }
}

export default App;
