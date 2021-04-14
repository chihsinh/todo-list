import React, { Component } from "react";
class Footer extends Component  {
    getItemNum(){
  		const num = this.props.itemList.filter(item => item.isCompleted !== true).length;
  		if (num !== 0) {
  			return num.toString() + ' incompleted left';
  		} else {
  			return 'All clear!';
  		}
    }
    render() {
      return (
        <footer className="todo-app__footer" id="todo-footer" style={this.props.count === 0? {visibility:'hidden'}: {visibility:'visible'}}>
              <div className="todo-app__total">
                  {this.getItemNum()}
              </div>
              <ul className="todo-app__view-buttons">
                  <button style={this.props.show === 'all'? {border: '1px outset #696969'} :null} onClick={e => this.props.updateState({show: 'all'})}>All</button>
                  <button style={this.props.show === 'active'? {border: '1px outset #696969'} :null} onClick={e => this.props.updateState({show: 'active'})}>Active</button>
                  <button style={this.props.show === 'completed'? {border: '1px outset #696969'} :null} onClick={e => this.props.updateState({show: 'completed'})}>Completed</button>
              </ul>
              <div className="todo-app__clean">
                  <button onClick={e => this.props.clearCompleted()} style={this.props.itemList.filter(item => item.isCompleted === true).length === 0? {visibility:'hidden'}: {visibility:'visible'}}>Clear completed</button>
              </div>
        </footer>
      );
    }
}
export default Footer;
