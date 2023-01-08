import React, { Component } from 'react';
import SimpleListItem from './SimpleListItem';

export default class SimpleListItems extends Component {

  render() {

    var items = this.props.items.map((item, index) => {
      return (
        <SimpleListItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          markDone={this.props.markDone}
        />
      );
    });

    return (
      <ul className="list-group"> {items} </ul>
    );

  }

}