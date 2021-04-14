import React, { Component } from "react";
import Input from "../components/Input";
import List from "../components/List";

class Section extends Component {
  render(){
    return (
      <section className="todo-app__main">
                  <Input newItem={this.props.newItem}
                         updateState={this.props.updateState}
                         addItem={this.props.addItem} />
                  <List itemList={this.props.itemList}
                        show={this.props.show}
                        changeItemState={this.props.changeItemState}
                        deleteItem={this.props.deleteItem}/>
      </section>
    );
  }
}
export default Section;
