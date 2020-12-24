import React from 'react';
function Children(props) {
  return (
    <div>{props.name}</div>
  )
}

class Hello extends React.Component{
  render() {
    return (
      <div>
        <Children name={this.props.name}></Children>
      </div>
    )
  }
}
export default Hello










