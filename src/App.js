import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
      textdecoration: "none",
      items: []
    };
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput]
    });
  }


  deleteTodo(item) {

    
    
    this.setState({
      textdecoration: "line-through"
    });
  }

  renderTodos() {

    return this.state.items.map((item) => {
      return (
        <div key={item}>
          <h3
            onClick={this.deleteTodo.bind(this, item)}
            style={{ textDecoration: this.state.textdecoration }}>{item}
          </h3>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 >Ma Todo list</h1>
        <form >
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Renseigner un item"
            onChange={this.onChange.bind(this)}

          />
          <button
            onClick={this.addTodo.bind(this)}

          >
            Ajouter
                </button>
        </form>
        <div>
          {this.renderTodos()}
        </div>
      </div>
    );
  }
}
