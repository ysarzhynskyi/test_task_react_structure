import React from 'react';

class Path extends React.Component {
  render() {
    const { text } = this.props;

    return <div>{text}</div>
  }
}

export default Path;