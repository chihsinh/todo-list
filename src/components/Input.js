import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        className="todo-app__input"
        placeholder="What needs to be done?"
        value={this.props.newItem}
        onChange={e => this.props.updateState({newItem: e.target.value})}
        onKeyPress={e => {if (e.key === 'Enter') {this.props.addItem();}}} />
    );
  }
}
export default Input;
