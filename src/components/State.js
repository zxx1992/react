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
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  // 生命周期函数
  componentDidMount() {
    this.onSetInterval = setInterval(() =>
      this.tick(), 1000
    );
  }
  // 卸载，销毁
  componentWillMount() {
    clearInterval(this.onSetInterval());
  }
}

export default State;