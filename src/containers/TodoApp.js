import React, { Component } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: '',
			itemList: [],
			count: 0,
			show: 'all', /*all, active, completed*/
		};
		this.addItem = this.addItem.bind(this);
		this.changeItemState = this.changeItemState.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
		this.updateState = this.updateState.bind(this);
	}

	addItem() {
		const newItem = {
				value: this.state.newItem.slice(),
				isCompleted: false,
			};

		var updatedList = [...this.state.itemList];
		updatedList.push(newItem);

		const newCnt = this.state.count + 1;

		this.setState({
			itemList: updatedList,
			newItem: '',
			count: newCnt,
		});
	}

	changeItemState(id) {
		var itemList = [...this.state.itemList];

		if (itemList[id].isCompleted) {
			itemList[id].isCompleted = false;
		}
		else {
			itemList[id].isCompleted = true;
		}

		this.setState({
			itemList,
		});
	}

	deleteItem(id) {
		const itemList = [...this.state.itemList];
		var updatedList = itemList.filter(item => itemList.indexOf(item) !== id);
		const newCnt = this.state.count - 1;
		this.setState({
			itemList: updatedList,
			count: newCnt,
		})
		if (newCnt === 0) {
			this.setState({
				show: 'all',
			})
		}
	}

	clearCompleted(){
		var updatedList = this.state.itemList.filter(item => item.isCompleted !== true);
		this.setState({
			itemList: updatedList,
			count: updatedList.length,
		})
		if (this.state.count === 0) {
			this.setState({
				show: 'all',
			})
		}
	}

	updateState(newState){
		this.setState(newState);
	}

    render() {
        return (
            <>
                <Header text="todos" />
                <Section className="todo-app__main"
												 newItem={this.state.newItem}
												 updateState={this.updateState}
												 addItem={this.addItem}
												 itemList={this.state.itemList}
			                   show={this.state.show}
			                   changeItemState={this.changeItemState}
			                   deleteItem={this.deleteItem} />
								<Footer count={this.state.count}
												show={this.state.show}
												itemList={this.state.itemList}
												clearCompleted={this.clearCompleted}
												updateState={this.updateState} />
            </>
        );
    }
}

export default TodoApp;
