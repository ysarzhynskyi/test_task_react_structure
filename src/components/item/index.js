import React from 'react';

class Item extends React.Component {
  render() {
    const { text } = this.props;

    return <div>{text}</div>
  }
}

export default Item;