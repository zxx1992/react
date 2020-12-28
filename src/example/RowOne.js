import React from 'react'

class RowOne extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
      </tr>
    )
  }
}

export default RowOne