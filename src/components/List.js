import React, { Component } from "react";

class List extends Component {
  showList() {
		 var showList = this.props.itemList;
		 if (this.props.show === 'active') {
			 showList = this.props.itemList.filter(item => item.isCompleted !== true);
		 }
		 else if (this.props.show === 'completed') {
			 showList = this.props.itemList.filter(item => item.isCompleted === true);
		 }
		 const showContent = showList.map(item => {
			return (
				<li key={showList.indexOf(item)} className="todo-app__item">
							<div className="todo-app__checkbox">
									<input
										id={showList.indexOf(item)}
										type='checkbox'
										onClick={e => this.props.changeItemState(showList.indexOf(item))}/>
									<label htmlFor={showList.indexOf(item)} style={item.isCompleted? {background: '#26ca299b'}:null}></label>
							</div>
								<h1 className={item.isCompleted? 'todo-app__item-detail todo-app__item-detail-completed': 'todo-app__item-detail'} >{item.value}</h1>

							<img src="img/x.png" className="todo-app__item-x" onClick={e => this.props.deleteItem(showList.indexOf(item))}/>
					</li>
				);
		})
		return showContent;
	}

  render() {
    return (
      <ul className="todo-app__list" id="todo-list">
        {this.showList()}
      </ul>
    );
  }
}
export default List;
