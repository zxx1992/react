import React from 'react'

class SearchBar extends React.Component {
  onChangeInput(e) {
    this.props.onChangeInput(e.target.value)
  }
  onChangeCheck(e) {
    this.props.onChangeCheck(e.target.value)
  }
  render() {
    return (
      <div>
        <input value={this.props.inputVal} onChange={(e) => this.onChangeInput(e)}></input>
        <input type="checkbox" value={this.props.checkVal} onChange={(e) => this.onChangeCheck(e)}></input>
      </div>
    )
  }
}

export default SearchBar