import React, { Component } from 'react';


import SimpleListItems from './SimpleListItems';
import SimpleForm from './SimpleForm';
import './App.css';


class SimpleDynamicList extends Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markDone = this.markDone.bind(this);
    this.state = { todoItems: this.props.initItems };
  }

  addItem(todoItem) {
    const items = this.state.todoItems;
    items.push({
      index: this.state.todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false,
    });
    this.setState({ todoItems: items });
  }

  removeItem(itemIndex) {
    const items = this.state.todoItems;
    items.splice(itemIndex, 1);
    this.setState({ todoItems: items });
  }

  markDone(itemIndex) {
    var todo = this.state.todoItems(itemIndex);
    let items = this.state.todoItems;
    items.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? items.push(todo) : items.push(todo);
    this.setState({ todoItems: items });
  }

  render() {
    return (
      <div id="main">
        <Header />
        <SimpleListItems
          items={this.props.initItems}
          removeItem={this.removeItem}
          markDone={this.markDone}
        />
        <SimpleForm addItem={this.addItem} />
      </div>
    );
  }

}


class Header extends Component {
  
  render() {
    return <h3>React Case Study - Add / Delete Items from a List</h3>;
    <br />
  }

}


export default SimpleDynamicList;