import React, { Component } from 'react';

export default class SimpleForm extends Component {

  constructor(props) {
    super(props);
    this.itemName = React.createRef();
    this.form = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.itemName.current.focus();
  }

  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.itemName.current.value;
    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.form.current.reset();
    }
  }

  render() {
    return (
      <form ref={this.form} onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref={this.itemName}
          className="form-control"
          placeholder="Add a new item to the list."
        />
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );
  }

}