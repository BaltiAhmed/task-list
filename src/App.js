import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
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
      items: [...this.state.items, { item: this.state.userInput, textdecoration: "none" }]
    });
  }

  deleteTodo(index) {
    this.setState({
      items: [...this.state.items, this.state.items[index].textdecoration = "line-through"]
    });
  }

  renderTodos() {

    return this.state.items.map((item, index) => {
      return (
        <div key={index}>
          <h3
            onClick={this.deleteTodo.bind(this, index)}
            style={{ textDecoration: item.textdecoration }}>{item.item}
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