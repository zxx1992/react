import React from 'react'
import Searchbar from './Searchbar'
import Content from './Content'

class Whole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: "",
      checkVal: false,
    }
  }
  handleChangeInput(e) {
    this.setState({
      inputVal: e
    })
  }
  handleChangeCheck(e) {
    this.setState({
      checkVal: e
    })
  }
  render() {
    return (
      <div>
        <Searchbar inputVal={this.state.inputVal}  checkVal={this.state.checkVal} onChangeCheck={(e) => this.handleChangeCheck(e)} onChangeInput={(e) => this.handleChangeInput(e)}></Searchbar>
        <Content></Content>
      </div>
    )
  }
}

export default Whole