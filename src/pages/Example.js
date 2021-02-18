import React from 'react'
export default class Weather extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    isHot: true
  };
  onchange = () => {
    let { isHot } = this.state;
    // isHot =!isHot;
    this.setState({
      isHot: !isHot
    })
  };
  render() {
    let { isHot } = this.state;
    return <h1 onClick={this.onchange}>今天天气很{isHot ? "炎热" : "凉爽"}</h1>
  }
}