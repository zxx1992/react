import React from "react"
class State extends React.Component {
  // 构造函数初始化数据
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  // 渲染函数
  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
  // 函数
  onSetInterval() {
    setInterval(() => {
      console.log(this.state.time, "this.state.time1")
      // 修改数据 ：  setStatus
      this.setState({
        time: new Date().toLocaleTimeString()
      })
      console.log(this.state.time, "this.state.time2")
    }, 1000)
  }

  // 生命周期函数
  componentDidMount() {
    this.onSetInterval();
  }
}

export default State;